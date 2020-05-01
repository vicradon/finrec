import React from 'react';
import { Router } from '@reach/router';
import Layout from './Layout';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import customTheme from '../utils/theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Layout>
        <Router>

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