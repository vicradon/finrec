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
  signInSuccessUrl: './home',
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


//This function is meant to convert the user's avatar to 
//a base64 image and use that image as the primary avatar
function getBase64Image(img) {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL("image/png");

  // return dataURL;
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

const tempImg = document.createElement('img')
tempImg.alt = "User avatar";


const startFirebaseUI = function (elementId) {
  ui.start(elementId, uiConfig)
}

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

/* THESE LINES ARE MEANT TO SWITCH THE PERSISTENCE TYPE BASED IN THE NODE_ENV PROCESS */
// firebase.auth().setPersistence(process.env.NODE_ENV === 'test'
//   ? firebase.auth.Auth.Persistence.NONE
//   : firebase.auth.Auth.Persistence.LOCAL);


firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const { uid, displayName, photoURL, email } = user;

    const base64Img = getBase64Image(tempImg);

    localStorage.setItem('finrec-userdetails', JSON.stringify({ uid, displayName, photoURL, email, base64Img }))
  }
})



export default startFirebaseUI