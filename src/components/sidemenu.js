import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Imgfunction from '../common/images';



const renderTab=(props)=>{
  const{subcontent,value,handleChange,classes,a11yProps}=props
  console.log(subcontent)
  const{path, icon}=subcontent.routes;
  if(path==="/message" || path==="/history" || path==="/location")
  {
  return(
    <>
     <span>{Imgfunction(`${icon}`)}</span>
    <Tabs
    orientation="vertical"
    variant="scrollable"
    value={value}
    onChange={handleChange}
    aria-label="Vertical tabs example"
    className={classes.tabs}
  >
        <Tab label="message" {...a11yProps(0)} />
        <Tab label="history" {...a11yProps(1)} />
        <Tab label="location" {...a11yProps(2)} />
       </Tabs>
    </>
  )
  }
  else if(path==="/messages" || path==="/historyas" || path==="/locatsaion")
  {
  return(
    <>
        <Tab label="Item One" {...a11yProps(3)} />
        <Tab label="Item Two" {...a11yProps(4)} />
        <Tab label="Item Three" {...a11yProps(5)} />
        <Tab label="Item One" {...a11yProps(6)} />
        <Tab label="Item Two" {...a11yProps(7)} />
        <Tab label="Item Three" {...a11yProps(8)} />       
        
    </>
  )
  }
  else if(path==="/messasae" || path==="/s" || path==="/s")
  {
  return(
    <>
        <Tab label="Item One" {...a11yProps(9)} />
        <Tab label="Item Two" {...a11yProps(10)} />
    </>
  )
  }
  else if(path==="/s" || path==="/s" || path==="/f")
  {
  return(
    <>
        <Tab label="Item One" {...a11yProps(11)} />
        <Tab label="Item Two" {...a11yProps(12)} />
        <Tab label="Item Three" {...a11yProps(13)} />
        <Tab label="Item One" {...a11yProps(14)} />
        <Tab label="Item Two" {...a11yProps(15)} />
    </>
  )
  }
};

export default function Submenu(props) {
  const {classes}=props;
  const {icon}=props.subcontent.routes;
  
  return (
    <div className={classes.root}>
        {renderTab(props)}
    
    </div>
  );
}