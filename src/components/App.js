import React from 'react';
import "../css/firebase-ui-auth.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import AuthPage from './authPage';
import MainApp from './MainApp';
import firebase from 'firebase/app';

function App() {

  return (
    <>
      <CssBaseline />
      <Router>
        {
          navigator.isOnline ?
            (firebase.auth().currentUser ?
              <MainApp path='/' /> :
              <>
                <AuthPage path='/' />
                <MainApp path='/home' />
              </>) :
            <MainApp path='/' />
        }
      </Router>
    </>
  );

}

export default App;



























/*import React, { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline';

import { Router } from "@reach/router";


const useStyles = makeStyles(theme => ({

}))



export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <h1>HEllO</h1>
      {/* <Router>
      </Router> *e/}
    </div>
  )
}*/