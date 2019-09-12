import React from 'react';
import '../styles/drawer.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Imgfunction from '../common/images';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles({
  list: {
    width: 350,
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [draw, setdraw] = React.useState('close');

  const {t, i18n} =useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdraw(open ? 'open':'close');
    setState({ ...state, [side]: open });
  };

  

  const sideList = side => (    
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
       
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <div>
        <button id="en"onClick={() => changeLanguage('en')}><img src={Imgfunction('flag2')}  alt="flag" /></button>
        <button id="jap"onClick={() => changeLanguage('jap')}><img src={Imgfunction('flag2')}  alt="flag" /></button>>
      </div>
      <div id="nav-icon0" class={`${draw} `} onClick={toggleDrawer('right', !state.right)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </>
  );
  
}