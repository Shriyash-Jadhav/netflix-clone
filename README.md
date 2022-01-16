# Netflix clone

## [Live here](https://react-netflixx.web.app/) for an **unknown period** of time.
 ReactJS web application with firebase authentication, clone of world's leading streaming entertainment service Netflix.

-   Allows you to watch movies and television shows whenever you want, on any device.
-   Used Firebase, for secure access to the database directly from client-side code.

## Stack used:

-   ReactJS
-   React Styled Components
-   Firebase (Firestore & Auth)
-   Netlify

## Installation

```cs
git clone https://github.com/Shriyash-Jadhav/netflix-clone.git
```

To run it you must have Firebase account.
Go to `https://console.firebase.google.com/u/0/` and create new project. Create local file: `/src/lib/firebase.prod.js` and fill in config object with your data.

```cs
 import firebase from "firebase/app"
 import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "YOUR KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "URL",
    projectId: "ID",
    storageBucket: "storage",
    messagingSenderId: "XXX",
    appId: "XXX"
})
export const auth = app.auth()
export default app
```


## Usage

Finally download the dependencies and run the project

```cs
npm i
npm run
```

## Author

Shriyash Jadhav


## Screenshot

![](https://i.ibb.co/QH3Y8rj/Netflix.png)


