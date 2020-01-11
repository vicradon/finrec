import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TodayIcon from '@material-ui/icons/Today';
import { AccountDetails } from './svgIcons/icons';

export default function BottomNav({ value, setValue, stickToBottom }) {
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className={stickToBottom}
    >
      <BottomNavigationAction label="Today" icon={<TodayIcon />} />
      <BottomNavigationAction label="Summary" icon={<AccountDetails />} />
    </BottomNavigation>
  )
}