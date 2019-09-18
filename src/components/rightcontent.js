import React from 'react';
import Submenu from './sidemenu';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './rightPanel';
import Imgfunction from '../common/images';
import MessageCeo from './messageceo';
import HistoryCeo from './history';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function RightContent(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return(
      <>
      <div className="s-fixebar">
        <span>{Imgfunction('greet')}</span>
      <Submenu classes={classes} value={value} a11yProps={a11yProps} handleChange={handleChange}/>
      </div>
      <div className="s-right-top"> 
      <TabPanel value={value} index={0}>
        <MessageCeo/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HistoryCeo/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      </div>
    </>
  )
}

export default RightContent;