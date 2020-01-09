import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container';
import ArrowBack from '@material-ui/icons/ArrowBack';
// import Menu from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import {Link} from '@reach/router'

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: '#3f51b5'
  },
  avatar: {
    fontSize: "0.3rem",
    background: 'transparent',
    cursor: 'pointer'
  },
  box: {
    height:40,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    cursor: 'pointer',
    color:'#fff'
  },
  link: {
    textDecoration:'none',
    color:'#fff'
  }
}))


export default function Nav({ projectActive }) {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <Container>
        {
          projectActive ?
            <Avatar className={classes.avatar}>
              <Link className = {classes.link} to = "/projects"><ArrowBack /></Link>
            </Avatar> :
            <Box className={classes.box}>
              <Typography>MaterialUI Projects</Typography>
            </Box>
        }
      </Container>
    </nav>
  )
}