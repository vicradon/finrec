import * as firebaseui from 'firebaseui'
import firebase from 'firebase/app'

const config = ({
  apiKey: "AIzaSyBd-hUfFtpSFOnixn2EpObNc8686Pi277A",
  authDomain: "medcare-1a.firebaseapp.com",
  databaseURL: "https://medcare-1a.firebaseio.com",
  projectId: "medcare-1a",
  storageBucket: "medcare-1a.appspot.com",
  messagingSenderId: "520499962764",
  appId: "1:520499962764:web:2f6285cce9986c1f"
})

// This is our firebaseui configuration object
export const uiConfig = ({
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: '/terms-of-service', // This doesn't exist yet
  privacyPolicyUrl: function () {
    window.location.assign('<your-privacy-policy-url>');
  }
})

// This must run before any other firebase functions
firebase.initializeApp(config)

// This sets up firebaseui
const ui = new firebaseui.auth.AuthUI(firebase.auth())

// This adds firebaseui to the page
// It does everything else on its own
const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig)
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const { uid, displayName, photoURL, email } = user;
    localStorage.setItem('finrec-userdetails', JSON.stringify({uid, displayName, photoURL, email}))
  }
})

export default startFirebaseUI