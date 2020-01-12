import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TodayIcon from '@material-ui/icons/Today';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { AccountDetails } from './svgIcons/icons';

export default function BottomNav({ value, setValue, stickToBottom }) {
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      style = {{borderTop:"1px solid #ccc"}}
      className={stickToBottom}
    >
      <BottomNavigationAction label="Today" icon={<TodayIcon />} />
      <BottomNavigationAction label="Summary" icon={<AccountDetails />} />
      <BottomNavigationAction label="Settings" icon={<SettingsApplicationsIcon />} />
    </BottomNavigation>
  )
}