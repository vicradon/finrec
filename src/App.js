import React, { useState } from 'react'
import SignIn from './components/Signin'
import Nav from './components/nav'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Projects from './components/project-list'
import CssBaseline from '@material-ui/core/CssBaseline';
import Welcome from './components/welcome'

import { Router } from "@reach/router";


const useStyles = makeStyles(theme => ({
  app: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  }
}))



export default function App() {
  const [projects] = useState([
    { name: 'SignIn Form', url: 'signinform', component: <SignIn key = 'signinform' path = '/signinform'/> },
    { name: 'Topcoder registration Form', url: 'tcoregform', component: '' },
  ]);

  const [projectActive, setProjectActive] = useState(false)

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Nav projectActive={projectActive} />
      <Router>
        <Welcome path = '/' />
        <Projects
          path='/projects'
          projectActive={projectActive}
          setProjectActive={setProjectActive}
          projects={projects}
        />
      </Router>
    </div>
  )
}