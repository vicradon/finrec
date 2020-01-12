import React, { useState, Suspense, useEffect } from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import makeStyles from '@material-ui/core/styles/makeStyles'
import BottomNav from './BottomNav';
import TodaysFinances, { getTotal } from './TodaysFinance';
import TabPanel from './TabPanel'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import SummaryTable from './SummaryTable';
import Settings from './Settings';

const useStyles = makeStyles(theme => ({
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



function buffer(uid, allData) {
  const currentBufferSize = +localStorage.getItem('finrec-buffer');
  localStorage.setItem('finrec-buffer', currentBufferSize + 1);
  if (localStorage.getItem('finrec-buffer') % 5 === 0) {
    firebase.firestore().collection('users').doc(uid)
      .set({ "allData": allData })
  }
}

export default function MainApp() {
  useEffect(() => {
    localStorage.setItem('finrec-settings', JSON.stringify({ currentCash: 0 }))
  })

  const { displayName, photoURL, uid } = JSON.parse(localStorage.getItem('finrec-userdetails'))

  const initialState = {
    'Sat Jan 11 2020': [],
    'Sun Jan 12 2020': [],
  }

  const [allData, setAllData] = useState(initialState)


  function toLevel1Store(todaysData) {
    return new Promise(resolve => {
      setAllData(prevData => ({
        ...prevData,
        [new Date().toDateString()]: todaysData,
      }))
      resolve({ ...allData, [new Date().toDateString()]: todaysData })
    })
      .then(res => {
        let income = +getTotal('Income', res[new Date().toDateString()]).split(' ').slice(1);
        let expense = -(+getTotal('Expense', res[new Date().toDateString()]).split(' ').slice(1));

        if (isNaN(income)) {
          income = 0
        }
        if (isNaN(expense)) {
          expense = 0
        }
        const newAmt = JSON.parse(localStorage.getItem('finrec-settings')).currentCash + income + expense;
        console.log(newAmt)


        localStorage.setItem('finrec-settings', JSON.stringify({ currentCash: newAmt }))

        localStorage.setItem('finrec-userdata', JSON.stringify(res))
        buffer(uid, res);
      })
  }



  const classes = useStyles();

  const colors = [classes.orange, classes.purple];
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
          <div className={classes.content} />
          <TodaysFinances
            toLevel1Store={toLevel1Store}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.content} />
          <SummaryTable />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.content} />
          <Settings />
        </TabPanel>

        <BottomNav value={value} setValue={setValue} stickToBottom={classes.stickToBottom} />

      </div>
    </div>
  )
}