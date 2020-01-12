import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));
export default function Settings() {
  const classes = useStyles();
  const initialState = JSON.parse(localStorage.getItem('finrec-settings')).currentCash;
  // if (localStorage.getItem('finrec-settings').currentCash) {
  //   initialState = JSON.parse(localStorage.getItem('finrec-settings')).currentCash;
  // }
  // else {
  //   localStorage.setItem('finrec-settings', JSON.stringify({ currentCash: 0 }))
  //   initialState = 0;
  // }
  const [values, setValues] = useState({
    currentCash: initialState,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    localStorage.setItem('finrec-settings', JSON.stringify({ currentCash: event.target.value }));
  };

  return (
    <>
      <h3>Settings</h3>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">"Current Cash"</InputLabel>
        <Input
          id="standard-adornment-amount"
          value={values.currentCash}
          onChange={handleChange('currentCash')}
          startAdornment={<InputAdornment position="start">₦</InputAdornment>}
        />
      </FormControl>
    </>
  )
}

