import React, { useState, useEffect } from 'react'
import firebase from "firebase/app";
import 'firebase/firestore';
import makeStyles from '@material-ui/core/styles/makeStyles'
import BottomNav from './BottomNav';
import TodaysFinances, { getTotal } from './TodaysFinance';
import TabPanel from './TabPanel'
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
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
  const { displayName, photoURL, uid } = JSON.parse(localStorage.getItem('finrec-userdetails'))

  let initialState = {
    initialCash: 0,
    totalIncome: 0,
    totalExpense: 0,
    days: {
      [new Date().toDateString()]: []
    }
  }

  if (localStorage.getItem('finrec-userdata')) {
    initialState = JSON.parse(localStorage.getItem('finrec-userdata'))
  }

  const [allData, setAllData] = useState(initialState);

  useEffect(() => {
    const monthVal = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'June': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 }
    const mostRecent = Object.keys(allData.days).map(x => +`${monthVal[x.slice(4, 7)]}${+x.slice(8, 10)}`).sort((a, b) => b - a)[0];

    if (`${new Date().getUTCMonth() + 1}${new Date().getUTCDate()}` !== mostRecent) {
      setAllData(prevData => {
        return {
          ...prevData,
          days: {
            ...prevData.days,
            [new Date().toDateString()]: []
          }
        }
      })
    }
  }, []);

  function setInitialCash(value) {
    setAllData(prevData => {
      return {
        ...prevData,
        initialCash: value
      }
    })
    storeAndBuffer({ ...allData, initialCash: value })
  }


  function storeAndBuffer(res) {
    localStorage.setItem('finrec-userdata', JSON.stringify(res))
    buffer(uid, res);
  }


  function toLevel1Store(todaysData) {
    const res = {
      ...allData,
      days: {
        ...allData.days,
        [new Date().toDateString()]: todaysData,
      }
    }

    let income = +getTotal('Income', res.days[new Date().toDateString()]).split(' ').slice(1);
    let expense = -(+getTotal('Expense', res.days[new Date().toDateString()]).split(' ').slice(1));

    if (isNaN(income)) {
      income = 0
    }
    if (isNaN(expense)) {
      expense = 0
    }

    setAllData(prevData => {
      const returnedObject = {
        ...prevData,
        totalIncome: income,
        totalExpense: expense,
        days: {
          ...prevData.days,
          [new Date().toDateString()]: todaysData,
        }
      }
      storeAndBuffer(returnedObject)
      return returnedObject
    })
  }




  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const initials = displayName.split(' ').map(x => x[0]).join('');

  return (

    <div className={classes.container}>
      <div className={classes.user}>
        <h3>{displayName}</h3>
        {
          navigator.onLine ?
            <Avatar src={photoURL} alt="User avatar" /> :
            <Avatar className={classes.purple}>{initials}</Avatar>
        }
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <div className={classes.content} />
          <TodaysFinances
            toLevel1Store={toLevel1Store}
            initialData={allData.days[new Date().toDateString()]}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.content} />
          <SummaryTable
            allData={allData.days}
            initialCash={allData.initialCash}
            totalIncome={allData.totalIncome}
            totalExpense={allData.totalExpense}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className={classes.content} />
          <Settings initialCash={allData.initialCash} setInitialCash={setInitialCash} />
        </TabPanel>

        <BottomNav value={value} setValue={setValue} stickToBottom={classes.stickToBottom} />

      </div>
    </div>
  )
}