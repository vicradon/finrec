import React, { forwardRef } from 'react'
import MaterialTable from 'material-table';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import { getTotal } from './TodaysFinance';

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} style={{ "color": "#3f51b5" }} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
}

function CurrentCash() {
  return (
    <h3>Current cash: ₦ {JSON.parse(localStorage.getItem('finrec-settings')).currentCash}</h3>
  )
}


export default function SummaryTable() {
  const localData = JSON.parse(localStorage.getItem('finrec-userdata'));
  const dataitems = [];
  for (let i in localData) {
    dataitems.push({
      date: i,
      expense: getTotal('Expense', localData[i]),
      income: getTotal('Income', localData[i])
    })
  }
  return (
    <>
      <CurrentCash />
      <MaterialTable
        title="Financial Summary"
        icons={tableIcons}
        data={dataitems}
        columns={[
          { title: 'Date', field: 'date' },
          { title: 'Income', field: 'income' },
          { title: 'Expense', field: 'expense' },
        ]}
      />
    </>
  )
}