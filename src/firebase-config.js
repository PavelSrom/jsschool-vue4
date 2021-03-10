import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyB_Luz06Byw3RdvGK1pnChLnWjmznvF7G0",
  authDomain: "jsschool-weather.firebaseapp.com",
  databaseURL: "https://jsschool-weather.firebaseio.com",
  projectId: "jsschool-weather",
  storageBucket: "jsschool-weather.appspot.com",
  messagingSenderId: "656441908988",
  appId: "1:656441908988:web:65cf62c9f301e1cc0e8179",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
// export const storage = firebase.storage()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp
