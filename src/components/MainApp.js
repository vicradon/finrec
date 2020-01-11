import React, { useState, Suspense } from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import makeStyles from '@material-ui/core/styles/makeStyles'
import BottomNav from './BottomNav';
import TodaysFinances from './TodaysFinance';
import TabPanel from './TabPanel'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Spinner from './Spinner';

const useStyles = makeStyles(theme => ({
  container: {
    // [theme.breakpoints.down('xs')]: {
    //   width: "300px"
    // },
  },
  avatar: {
    height: "40px",
    borderRadius: "50%"
  },
  user: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem"
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  content: {
    margin: "0 auto",
    width: "400px",
    [theme.breakpoints.down('sm')]: {
      width: "calc(100vw - 50px)"
    }
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}))

export default function MainApp() {
  function MainAppCont() {
    const { displayName, photoURL, uid } = JSON.parse(localStorage.getItem('finrec-userdetails'))

    let initialState = {
      todaysData: JSON.parse(localStorage.getItem('finrec-userdata'))['finrec-userdata'].todaysData,
    };

    const [allData, setAllData] = useState(initialState)


    // if (JSON.parse(localStorage.getItem('finrec-userdata'))) {
    //   initialState = JSON.parse(localStorage.getItem('finrec-userdata'));
    //   setAllData(initialState);
    //   // firebase.firestore().collection('users').doc(uid).set({ 'finrec-userdata': allData });
    // }
    /*
    if(!JSON.parse(localStorage.getItem('finrec-userdata'))) {
      firebase.firestore().collection('users').doc(uid).get()
        .then(res => {
          initialState = res.data()['finrec-userdata'];
          setAllData(initialState);
        })
        .catch(err => { throw new Error(err) })
    }
  
    function sendToStores(){
      localStorage.setItem('finrec-userdata', JSON.stringify({ 'finrec-userdata': allData }));
      // firebase.firestore().collection('users').doc(uid).set({ 'finrec-userdata': allData });
    }
  
  
    function toLevel1Store(todaysData) {
      setAllData(prevData => ({
        ...prevData,
        todaysData: todaysData,
        // allTimeData: [...allData.allTimeData, todaysData]
      }))
    }
    sendToStores();
    */
    function toLevel1Store(todaysData) {
      setAllData(prevData => ({
        ...prevData,
        todaysData: todaysData,
        // allTimeData: [...allData.allTimeData, todaysData]
      }))
    }


    const classes = useStyles();

    const colors = [classes.orange, classes.purple];

    /* THESE COMMENTED LINES ARE MEANT TO GET THE BASE 64 IMAGE AND SET IT FOR USE */
    // const avatar = document.createElement('img');
    // avatar.src = "data:image/png;base64," + base64Img;
    // avatar.addEventListener('load', () => console.log(avatar))
    // // avatar.src = `data:image/png;base64,${base64Img}`;
    // console.log(avatar)
    const [value, setValue] = React.useState(0);
    const initials = displayName.split(' ').map(x => x[0]).join('');

    return (

      <div className={classes.container}>
        <div className={classes.user}>
          <h3>{displayName}</h3>
          {
            navigator.onLine ?
              <Avatar src={photoURL} alt="User avatar" /> :
              <Avatar className={colors[Math.floor((Math.random() * 2))]}>{initials}</Avatar>
          }
        </div>
        <div>
          <TabPanel value={value} index={0}>
            <div
              className={classes.content}
            />
            <TodaysFinances todaysData={allData.todaysData} toLevel1Store={toLevel1Store} />

          </TabPanel>
          <TabPanel value={value} index={1}>
            <div
              className={classes.content}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div
              className={classes.content}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div
              className={classes.content}
            />
          </TabPanel>

          <BottomNav value={value} setValue={setValue} stickToBottom={classes.stickToBottom} />

        </div>
      </div>
    )
  }
  return (
    <Suspense fallback={<Spinner />}>
      <MainAppCont />
    </Suspense>
  )
}