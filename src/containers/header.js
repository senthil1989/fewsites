import React from 'react';
// import {connect} from 'react-redux';
// import {handleClick} from '../actions/header';
import '../styles/drawer.scss';
import '../common/assets/css/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Imgfunction from '../common/images';
import { useTranslation } from 'react-i18next';
// import headerReducer from '../reducers/header';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
});



function TemporaryDrawer() {
  const {t, i18n} =useTranslation();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const [draw, setdraw] = React.useState('close');
  const [expanded, setOpen] = React.useState({});
  const domRef = React.useRef(null);

  function handleClick(id) { 
    setOpen({expanded: expanded, [id]:true});
  }
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const toggleDrawer = (side, open,id) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdraw(open ? 'open':'close');
    setState({ ...state, [side]: open });
    setOpen(false)
  };

  const getItems=()=> {
    var json =  { 
      "items":[ 
         { 
            "id":1,
            "name":`${t("AbouttheCompany")}`,
            "submenu":[ 
               { 
                  "id":11,
                  "sname":`${t("MessagefromCEO")}`
               },
               { 
                  "id":12,
                  "sname":`${t("History")}`
               },
               { 
                  "id":13,
                  "sname":`${t("Location")}`
               },
   
            ],
   
         },
         { 
            "id":2,
            "name":`${t("Product")}`,
            "submenu":[ 
               { 
                  "id":21,
                  "sname":`${t("Gases")}`
               },
               { 
                  "id":22,
                  "sname":`${t("Chemical")}`
               },
               { 
                  "id":23,
                  "sname":`${t("Gasket")}`
               },
               { 
                  "id":24,
                  "sname":`${t("BEAD")}`
               },
               { 
                  "id":25,
                  "sname":`${t("FDT")}`
               },
               { 
                  "id":26,
                  "sname":`${t("ShutterValve")}`
               }
            ],
   
         },
         { 
            "id":3,
            "name":`${t("Employment")}`,
            "submenu":[ 
               { 
                  "id":31,
                  "sname":`${t("Employment")}`
               },
               { 
                  "id":32,
                  "sname":`${t("Apply")}`
               },
   
            ],
   
         },
         { 
            "id":4,
            "name":`${t("CustomerSupport")}`,
            "submenu":[ 
               { 
                  "id":41,
                  "sname":`${t("Notice")}`
               },
               { 
                  "id":42,
                  "sname":`${t("Catalogue")}`
               },
               { 
                  "id":43,
                  "sname":`${t("MSDS")}`
               },
               { 
                  "id":44,
                  "sname":`${t("PromotionCenter")}`
               },
               { 
                "id":45,
                "sname":`${t("Inquiry")}`
                }
            ],
   
         }
      ]
   }
  
  
  return json;
  }
  const list = getItems();
  const sideList = side => (  
    <div className="header-main">
    <div className="h-flag">
        <span id="en"onClick={() => changeLanguage('en')}>{Imgfunction('flag2')}</span>
        <span id="jap"onClick={() => changeLanguage('jap')}>{Imgfunction('flag1')}</span>
      </div>
     
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
       <div className="h-logo">{Imgfunction('logo')}</div>  
      <List>
        {list.items.map((text,index) => (
         <React.Fragment key={text.name}> 
          <ListItem button  key={text.id} ref={domRef} onClick={()=>handleClick(index)}>
          <ListItemText primary={text.name} /> 
        </ListItem>
        <Divider />
        <Collapse in={expanded[index]}  key={text.id+text.name}  timeout="auto" unmountOnExit>
          <List component="div" disablePadding key={text.id+index.toString()}>
            {text.submenu.map((submenus, index)=>{ return(<ListItem button  key={submenus.id+"sub"} className={classes.nested} >
              <ListItemText key={submenus.id} primary={submenus.sname} />
            </ListItem>)})}
          </List>
        </Collapse>
        </React.Fragment>
        ))}
      </List>
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
           
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
    </div>
  );

  return (
    <>
      <div id="nav-icon0" className={`${draw} `} onClick={toggleDrawer('right', !state.right)}>
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
// function mapStateToProps(state) {
//   console.log(state)
//   return {exOpen:state.headerReducer};
// }

// const mapDispatchToProps = dispatch => ({
//     // dispatching plain actions
//     handleClick: text => dispatch(handleClick(text))
// })
// export default  connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer)
export default  TemporaryDrawer;