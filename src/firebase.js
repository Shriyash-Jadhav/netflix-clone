import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCEGwrDQ9aKhvBDoX3S8ckGwo8FjgsqLJU",
  authDomain: "react-netflixx.firebaseapp.com",
  projectId: "react-netflixx",
  storageBucket: "react-netflixx.appspot.com",
  messagingSenderId: "989162044098",
  appId: "1:989162044098:web:896aa4a651098e2d0c595b",
  measurementId: "G-0J4ZZGNYD5"
})

export const auth = app.auth()
export default app
