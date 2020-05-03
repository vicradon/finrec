import React from 'react';
import { Router } from '@reach/router';
import Layout from './Layout/index';
import Dashboard from './Dashboard/Dashboard';
import About from './About';
import Settings from './Settings';
import Transactions from './Transactions';
import NotFound from './NotFound';
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from '../utils/theme';

function App() {
  const MainApp = () => (
    <Layout>
      <Router>
        <Dashboard path="/" />
        <About path="/about" />
        <Settings path="/settings" />
        <Transactions path = "/transactions" />
        <NotFound default />
      </Router>
    </Layout>
  )

  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <MainApp />
      </ColorModeProvider>
    </ThemeProvider>
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