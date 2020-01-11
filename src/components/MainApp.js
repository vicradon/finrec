import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import BottomNav from './BottomNav';
import TodaysFinances from './TodaysFinance';
import TabPanel from './TabPanel'


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
  }
}))

export default function MainApp() {
  const [allData, setAllData] = useState({

  })

  function toLevel1Store(todaysdata){
    setAllData(prevData => ({
      ...prevData,
      todaysdata:todaysdata
    }))
  }

  console.log(allData)
  const classes = useStyles();
  const { displayName, photoURL } = JSON.parse(localStorage.getItem('finrec-userdetails'))

  const [value, setValue] = React.useState(0);


  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <h3>{displayName}</h3>
        <img className={classes.avatar} src={photoURL} alt="User avatar" />
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <div
            className={classes.content}
          />
            <TodaysFinances toLevel1Store = {toLevel1Store} />

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

        <BottomNav value = {value} setValue = {setValue} stickToBottom = {classes.stickToBottom} />

      </div>
    </div>
  )
}