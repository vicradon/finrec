import React, { forwardRef, useState, useEffect } from 'react';
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


export default function TodaysFinances({ toLevel1Store }) {
  const [state, setState] = useState({
    columns: [
      // { title: 'Day', field: 'day', lookup: { "Monday": "Monday", "Tuesday": "Tuesday", "Wednesday":"Wednesday", "Thursday":"Thursday", "Friday":"Friday", "Saturday":"Saturday", "Sunday":"Sunday" } },
      { title: 'Income or Expense', field: 'name' },
      { title: 'TIme', field: 'time', type: 'time' },
      { title: 'Type', field: 'type', lookup: { "Expense": "Expense", "Income": "Income" } },
      { title: `Amount ₦`, field: 'amount' },
    ]
  });
  let initialTodaysData = JSON.parse(localStorage.getItem('finrec-userdata'))['finrec-userdata'].todaysData;

  const [todaysData, setTodaysData] = useState({ data: initialTodaysData });

  return (
    <>
      <h3>{new Date().toDateString()}</h3>
      <MaterialTable
        title="Finances"
        columns={state.columns}
        data={todaysData.data}
        icons={tableIcons}
        options={{
          actionsColumnIndex: -1,
          searchFieldStyle: {
          },
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
    </>
  );
}
