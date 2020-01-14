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
export default function Settings({initialCash, displayedCash, setDisplayedCash, setInitialCash}) {
  const classes = useStyles();
  
  const [values, setValues] = useState({
    initialCash: initialCash
  });

  const handleChange = prop => event => {
    new Promise(resolve => {
      setValues({ ...values, [prop]: event.target.value });
      resolve({ ...values, [prop]: event.target.value })
    })
    .then(res => {
      setInitialCash(+res.initialCash)
    })
  };

  return (
    <>
      <h3>Settings</h3>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="standard-adornment-amount">"Initial Cash"</InputLabel>
        <Input
          type = "number"
          id="standard-adornment-amount"
          value={initialCash}
          onChange={handleChange('initialCash')}
          startAdornment={<InputAdornment position="start">₦</InputAdornment>}
        />
      </FormControl>
    </>
  )
}

