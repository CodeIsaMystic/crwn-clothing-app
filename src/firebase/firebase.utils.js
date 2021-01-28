import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { initialize } from 'workbox-google-analytics';



const config = {
  apiKey: "AIzaSyC6V5BCNKR3Haqd-f92jXrnQ_XXyIXuVoM",
  authDomain: "crwn-db-fc8d8.firebaseapp.com",
  projectId: "crwn-db-fc8d8",
  storageBucket: "crwn-db-fc8d8.appspot.com",
  messagingSenderId: "959535031382",
  appId: "1:959535031382:web:b0d310e346f07aac5ac7f7",
  measurementId: "G-NB844DR06N"
};

firebase.initializeApp(config);


/* Creating user profile ref and snapshot with firestore 
    getting data and linked to firebase auth 
  OR how to get in the DB our user data 
*/
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  /* .uid firestore method  */
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  /*const collectionRef = firestore.collection('users');*/

  /* snapshot .get() firestore method  */
  const snapShot = await userRef.get();


  /* Log in the collection snapShot users from firebase
  const collectionSnapshot = await collectionRef.get();

  console.log({ collectionSnapshot });
  console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) }); */


  /*  snapshot .exists firestore method  */
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); /* Date() js object  */
    try {
      /* .set() create a new document object if not exists */
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);


  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);

    /* Log in each document
    console.log(newDocRef); */
  });

  return await batch.commit();
}


export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      /*  Javascript render method  */
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });


  console.log(transformedCollection);
  /*return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});*/
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();



/* Giving access to the new google auth provider class from the firebase authentication lib */
const provider = new firebase.auth.GoogleAuthProvider();

/* allows to access everytimes to the google popup only 
(bunch of popups in this lib)
signInWithPopup have different type of popup */
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;