import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles'

import { Link } from '@reach/router'



const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  button: {
    margin: '0 auto',
    backgroundColor:'#3f51b5'
  },
  box: {
    textAlign: 'center'
  }
}))


export default function Welcome({ path }) {
  const classes = useStyles();
  return (
    <Typography variant="h4">
      <Box className = {classes.box} m={15} >
        Welcome to the demo shitty app
      </Box>
      <Box className = {classes.box} m={15} >
        <Link className={classes.link} to='/projects'>
          <Button className = {classes.button} variant="contained" color="primary">
            Go to projects
          </Button>
        </Link>
      </Box>
    </Typography>
  )
}