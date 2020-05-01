import React from 'react';
import { Router } from '@reach/router';
import Layout from './Layout';
import Dashboard from './Dashboard';
import About from './About';
import NotFound from './NotFound';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from '../utils/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Router>
          <Dashboard path="/" />
          <About path="/about" />
          <NotFound default />
        </Router>
      </Layout>
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