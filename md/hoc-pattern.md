# HOC Pattern

The Hoc Pattern is very common used pattern not only in React but also in lots of libraries.

## Introduction

- Explanation

It allows your component to provide the functionality that the library print.

- Project's examples

WithRouter, WithSpinner or the connect redux function are some HOC examples we used in this project...

- Situation

Looking for various components very similar, maybe fetching some data source URL, then setting some states... If we got to do this for 3, 4, 5 different components,then we will have potentially to rewrite our code many times...

!!! The HOC Pattern allows us to Wrap this functionality inside a function. Then share with all components needing this functionality.

<br>
<br>
<br>

## Syntax, code example

_Here a React example sharing the functionality, fetching data then setting states.._.

### **HOC Component**

We treat Data as Data fetched and Data Source URL, setting states and passing that functionality to the WrappedComponent.

```javascript
import React from "react"

const withData = (WrappedComponent) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      setTimeout(() => {
        fetch(this.props.dataSource)
          .then((response) => response.json())
          .then((data) => this.setState({ data: data }))
      }, 1500)
    }

    render() {
      const { dataSource, ...otherProps } = this.props

      return this.state.data.length < 1 ? (
        <h1>LOADING</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...otherProps} />
      )
    }
  }

  return WithData
}

export default withData
```

!!!- It returns the WrappedComponent WITH the functionality, and so we have to then set up the Data source, treat the data fetched from the backend, handling states & props with the benefits of the `withData` component functionality.

<br>
<br>
<br>

### **Wrapped Component**

The way to use it on the Wrapped Component is not much complicated and similar the connect() Redux method...

```javascript
import React from "react"

import withData from "../../with-data"

const UserProfile = ({ data, name, email }) => (
  <div className="container">
    <h1>{name}</h1>
    <h2>{email}</h2>
    Posts:
    {data.map((post) => (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
)

export default withData(UserProfile)
```

!!!- We _import the Higher Order Component_: <br>`import withData from '../../with-data'` <br> Using _a Functional Component, passing data as props_: <br>`const UserProfile = ({ data, name, email }) => ...` <br> _Exporting and Wrapping our component_ on the HOC: <br>`export default withData(UserProfile)`

<br>
<br>
<br>

---

**NOTICE**: we do not treat the Data source URL here in the WrappedComponent, but we definitively can when passing it to the withData HOC:

```js
export default withData(
  UserProfile,
  "https://jsonplaceholder.typicode.com/users"
)
```

---

<br>
<br>

### **Handling the Data source as prop**

We can now also **use and set the Data source as an Attribute when rendering the Component**, here in our `App.js` file:

```js
import React from "react"

import UserProfile from "./components/user-profile/user-profile.component"
import UserList from "./components/user-list/user-list.component"

import "./App.scss"

function App() {
  return (
    <div className="App">
      <UserList dataSource="https://jsonplaceholder.typicode.com/users" />
      <UserProfile
        name="Yihua"
        email="yihuazhang@gmail.com"
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  )
}

export default App
```

!!!- We add the dataSource attr: <br>`<UserList dataSource="https://jsonplaceholder.typicode.com/users" />` <br> in our rendered component as wanted, as a prop.

<br>
<br>
<br>
<br>

---

## Conclusion

This way **the states are handled** in the Higher Order Component **passing the data as props** to their WrappedComponent **offering a cleaner code, readable, maintainable and well organized...**
