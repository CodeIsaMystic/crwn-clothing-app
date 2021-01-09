# NOTES 

Make an E-commerce complete project with React, Redux, Hooks and GraphQL...

A complete project... called "crown-clothing"



1- Reading & Visualizing the Design
  - fast visual of what we need, what we want to do 
  - thinking on components, reusable components

  => The design is here nice but but also simplified, because it's not the purpose. So, we start with a simple Header, then an image block navigation on categories
  => If we focus on the nav, we want here to build an "image-card component" which we will positioning on different way.  

  2- Building the homepage first as a Component itself:
    - build the html struct on homepage.component.jsx file for the 5 items menu 
    - export default 







### REDUX 


##### Starter
  - 'redux'
  - 'react-redux'




#### Storage 
  -   storage from 'redux-persist/lib/storage'  on root-reducer.js
  - { createStore, applyMiddleware } from 'redux' on store.js
  - { persistStore } from 'redux-persist   on store.js


## Root
 ### 'redux-persist' 
 Redux persist ships with react integration as a convenience. The PersistGate component is the recommended way to delay rendering until persistence is complete.
  -   rootReducer from './root-reducer'  on store.js
  - { persistReducer } from 'redux-persist'  on root-reducer.js
  - { combineReducers } from 'redux'  on root-reducer.js



### 'redux-logger'
Implementation of the console API. Useful if you are using a custom, wrapped version of console.
  -   logger from 'redux-logger' on store.js




#### Reducers

  -   userReducer from './user/user.reducer'  on root-reducer.js
  -   cartReducer from './cart/cart.reducer  on root-reducer.js;
  -   directoryReducer from './directory/directory.reducer'  on root-reducer.js
  -   shopReducer from './shop/shop.reducer'  on root-reducer.js

####  Selectors
  - { createSelector } from 'reselect' on directory.selectors.js

  ###### User, Shop, Cart
  - { createSelector } from 'reselect' on .selectors.js

#### Reducers
  - { createSelector } from 'reselect'










## SUMMARY 

### CONCEPTS:

  #### INTRO
  #### REACT: key concepts
  #### REACT: basics


### MASTER PROJECT: "CRWN Clothing Ltd."

  #### E-COMMERCE: setting up (project)
  #### REACT ROUTER & ROUTING (project)
  #### FORMS & COMPONENTS (project)
  #### FIREBASE & USER AUTH (project)
  #### REDUX 1 (project)
  #### SESSION STORAGE & PERSISTENCE (project)
  #### REDUX 2 (project)
  #### ADVANCED ROUTING (project)
  #### STATE NORMALIZATION (project)
  #### STRIPE PAYMENT (project)
  #### DEPLOYING TO PRODUCTION (project)
  #### STYLED COMPONENTS: css in js (project)
  #### ADVANCED REDUX & FIREBASE (project)
  #### HOT PATTERNS (project)
  #### ASYNC REDUX (project)
  #### CONTAINER PATTERN (project)
  #### REDUX SAGA (project)
  #### REACT HOOKS (project)
  #### STRIPE PAYMENT: part 2 - backend (project)
  #### CONTEXT API (project)
  #### GRAPHQL & APOLLO (project)
  #### MOBILE SUPPORT (project)
  #### REACT PERF (project)



### BONUS:

  #### ITW QUESTIONS & ADVICE
  #### PWA
  #### FIREBASE SECURITY
  #### TESTING
  #### WEBPACK & BABEL
  #### GATSBY BLOG
  #### KEY DEVELOPER CONCEPTS
  #### OPEN SOURCE PROJECTS
    => BONUS 1
    => BONUS 2























  !!! Middlewares, Persist, Memoize
