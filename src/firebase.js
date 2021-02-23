// import * as firebase from "firebase"; // initializing app error
import { firebase } from '@firebase/app';
import 'firebase/storage';
import "firebase/database";

var config = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID,
    dbUrl: process.env.VUE_APP_DB_URL
  }
  firebase.initializeApp(config)
  export default firebase;