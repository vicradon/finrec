import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import { Link as UILink } from '@material-ui/core/Link';
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { Router, Link } from '@reach/router'

const useStyles = makeStyles(theme => ({
  grid: {
    padding: '1rem 2rem'
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  root: {
    padding: theme.spacing(3, 2),
    border:'1px solid #888'
  },
  title: {
    padding: theme.spacing(2, 5, 0, 5),
  }
}))



export default function Projects({ projects, projectActive, setProjectActive }) {
  // const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const projComps = projects.map(x => (x.component))[0];
  console.log(projComps)

  return (
    <>
      <CssBaseline />
      {
        projectActive ?
          null :
          <>
            <Typography className={classes.title} variant="h4">
              Projects
              </Typography>
            <Grid spacing={2} className={classes.grid} container>
              {
                projects.map(x => (
                  <Grid
                    className={classes.griditem}
                    key={x.url}
                    item xs={12}
                    sm={6}
                    lg={4}
                    xl={3}
                    onClick = {() => setProjectActive(true)}
                  >
                    <Link className = {classes.link}
                      to={`/projects/${x.url}`}
                    >
                      <Card>
                        <Paper className={classes.root}>
                          <Typography variant="h5">
                            {x.name}
                          </Typography>
                        </Paper>
                      </Card>
                    </Link>
                  </Grid>
                ))
              }
            </Grid>
          </>
      }


      <Router>
        {projComps}
      </Router>

    </>
  )
}