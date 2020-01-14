import React, { forwardRef, useState } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Grid, Paper, makeStyles } from '@material-ui/core';
// import '../css/toolbar-overide.css'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} style={{ "color": "#3f51b5" }} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} style={{ "color": "red" }} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} style={{ "color": "#3f51b5" }} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} style={{ "color": "#3f51b5" }} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
}

export function getTotal(type, data) {
  const dataitems = data.filter(x => x.type === type)
  if (dataitems.length > 0) {
    return `₦ ${dataitems.map(x => +x.amount).reduce((x, y) => x + y)}`;
  }
  return `No ${type}`;
}

const useStyles = makeStyles(theme => ({
  summary: {
    padding: "2rem 1rem",
    margin: "1rem auto"
  },
  summaryHeader: {
    marginTop: 0
  }
}))

export default function TodaysFinances({ initialData, toLevel1Store }) {
  const classes = useStyles();
  const columns = [
        { title: 'Entry', field: 'name' },
    {
      title: `Amount ₦`, field: 'amount', type: 'numeric', cellStyle: {
        textAlign:'center'
      },
      headerStyle: {
        textAlign:'left',
      }
    },
    { title: 'Type', field: 'type', lookup: { "Expense": "Expense", "Income": "Income" } },
    { title: 'Time', field: 'time', type: 'time' }
  ]

  const [todaysData, setTodaysData] = useState({ "data": initialData });


  return (
    <>
      <h3>{new Date().toDateString()}</h3>
      <MaterialTable
        title="Finances"
        columns={columns}
        data={todaysData.data}
        icons={tableIcons}
        options={{
          actionsColumnIndex: -1,
          search: false,
        }}
        currencySetting={{
          currency: "Naira"
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setTodaysData(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  toLevel1Store(data)
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setTodaysData(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    toLevel1Store(data)
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setTodaysData(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  toLevel1Store(data)
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
      <Paper elevation={3} className={classes.summary}>
        <h3 className={classes.summaryHeader}>Summary</h3>
        <Grid container>

          <Grid container item xs={12}>
            <Grid item xs={6}>Total Expense:</Grid>
            <Grid item xs={6}>{getTotal('Expense', todaysData.data)}</Grid>
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={6}>Total Income:</Grid>
            <Grid item xs={6}>{getTotal('Income', todaysData.data)}</Grid>
          </Grid>

        </Grid>
      </Paper>

    </>
  );
}