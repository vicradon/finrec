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
    today: {
      totalIncome: 0,
      totalExpense: 0,
    },
    cummulative: {
      totalIncome: 0,
      totalExpense: 0,
    },
    days: {
      [new Date().toDateString()]: []
    }
  }

  if (localStorage.getItem('finrec-userdata')) {
    initialState = JSON.parse(localStorage.getItem('finrec-userdata'))
  }

  const [allData, setAllData] = useState(initialState);

  useEffect(() => {
    const monthVal = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'June': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 };
    const dayVal = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7 };
    const mostRecent = Object.keys(allData.days).map(x => +`${monthVal[x.slice(4, 7)]}${+x.slice(8, 10)}${dayVal[x.slice(0, 3)]}`).sort((a, b) => b - a)[0];

    if (`${new Date().getUTCMonth() + 1}${new Date().getUTCDate()}${new Date().getUTCDay()}` !== mostRecent) {
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
  
  const stuff = {
    "initialCash": 0,
    "today": {
      "totalIncome": 0,
      "totalExpense": -500
    },
    "cummulative": {
      "totalIncome": 0,
      "totalExpense": -500
    },
    "days": {
      "Wed Jan 15 2020": [
        { "name": "Wednesday stuff", "amount": "150", "type": "Expense", "time": "2020-01-16T18:52:55.716Z", "tableData": { "id": 0 } },
        { "name": "more stuff", "amount": "100", "type": "Expense", "time": "2020-01-16T16:54:18.674Z", "tableData": { "id": 1 } }
      ],
      "Thu Jan 16 2020": [
        { "name": "stuff", "amount": "200", "type": "Expense", "time": "2020-01-16T18:52:55.716Z", "tableData": { "id": 0 } },
        { "name": "more stuff", "amount": "300", "type": "Expense", "time": "2020-01-16T16:54:18.674Z", "tableData": { "id": 1 } }
      ]
    }
  }

  function dateToUse() {
    const monthVal = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'June': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12 }
    const dayVal = { 'Mon': 1, 'Tue': 2, 'Wed': 3, 'Thu': 4, 'Fri': 5, 'Sat': 6, 'Sun': 7 };
    const mostRecent = Object.keys(allData.days).map(x => +`${monthVal[x.slice(4, 7)]}${+x.slice(8, 10)}${dayVal[x.slice(0, 3)]}`).sort((a, b) => b - a)[0];
    const getKey = (object, value) => Object.keys(object).find(key => object[key] === value);
    const month = getKey(monthVal, +String(mostRecent).split('')[0]);
    const day = getKey(dayVal, +String(mostRecent).split('')[3]);
    const monthDay = +String(mostRecent).split('').slice(1, 3).join('');
    return `${day} ${month} ${monthDay} 2020`
  }

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

    let todaysIncome = +getTotal('Income', res.days[new Date().toDateString()]).split(' ').slice(1);
    let todaysExpense = -(+getTotal('Expense', res.days[new Date().toDateString()]).split(' ').slice(1));

    if (isNaN(todaysIncome)) {
      todaysIncome = 0
    }
    if (isNaN(todaysExpense)) {
      todaysExpense = 0
    }

    function getCummulative(type) {
      let cummulative = 0;
      for (let i in res.days) {
        cummulative += res.days[i].map(x => {
          let a = 0;
          if (x.type === type) a = +x.amount;
          return a;
        }).reduce((x, y) => x + y);
      }
      return cummulative;
    }

    setAllData(prevData => {
      const returnedObject = {
        ...prevData,
        today: {
          totalIncome: todaysIncome,
          totalExpense: todaysExpense,
        },
        cummulative: {
          totalIncome: getCummulative('Income'),
          totalExpense: -getCummulative('Expense'),
        },
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

  function currentDayInState() {
    const keys = Object.keys(allData.days)
    return allData.days[keys[keys.length - 1]];
  }

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
            initialData={currentDayInState()}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <div className={classes.content} />
          <SummaryTable
            allData={allData.days}
            initialCash={allData.initialCash}
            totalIncome={allData.cummulative.totalIncome}
            totalExpense={allData.cummulative.totalExpense}
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