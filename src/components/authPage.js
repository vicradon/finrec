import React, { useEffect } from 'react';
import startFirebaseUI, { uiConfig } from './firebase.js'
import "../css/firebase-ui-auth.css"
import makeStyles from '@material-ui/core/styles/makeStyles'
// import firebase from 'firebase/app';

const useStyles = makeStyles(theme => ({
  container: {
    border: "1px solid #aaa",
    width: "400px",
    height: "100%",
    margin: "5rem auto",
    '&:h1': {
      color: 'red'
    },
    [theme.breakpoints.down('xs')]: {
      width: "300px"
    },
  },
  authText: {
    textAlign: "center"
  }
}))


export default function AuthPage() {
  const classes = useStyles();
  useEffect(() => {
    startFirebaseUI('#firebaseui-auth-container', uiConfig);
  
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.authText}>
        <h1>Welcome to FinRec</h1>
        <h2>Login Here</h2>
      </div>

      <div id="firebaseui-auth-container"></div>
    </div>
  );
}