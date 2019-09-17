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
  const [open, setOpen1] = React.useState(true);
  const domRef = React.useRef(null);

  React.useEffect(() => {
    console.log(domRef.current); // DOM node
  }, []);

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
                  "id":1,
                  "sname":`${t("MessagefromCEO")}`
               },
               { 
                  "id":2,
                  "sname":`${t("History")}`
               },
               { 
                  "id":3,
                  "sname":`${t("Location")}`
               },
   
            ],
   
         },
         { 
            "id":2,
            "name":`${t("Product")}`,
            "submenu":[ 
               { 
                  "id":1,
                  "sname":`${t("Gases")}`
               },
               { 
                  "id":2,
                  "sname":`${t("Chemical")}`
               },
               { 
                  "id":3,
                  "sname":`${t("Gasket")}`
               },
               { 
                  "id":4,
                  "sname":`${t("BEAD")}`
               },
               { 
                  "id":4,
                  "sname":`${t("FDT")}`
               },
               { 
                  "id":4,
                  "sname":`${t("ShutterValve")}`
               }
            ],
   
         },
         { 
            "id":3,
            "name":`${t("Employment")}`,
            "submenu":[ 
               { 
                  "id":1,
                  "sname":`${t("Employment")}`
               },
               { 
                  "id":2,
                  "sname":`${t("Apply")}`
               },
   
            ],
   
         },
         { 
            "id":4,
            "name":`${t("CustomerSupport")}`,
            "submenu":[ 
               { 
                  "id":1,
                  "sname":`${t("Notice")}`
               },
               { 
                  "id":2,
                  "sname":`${t("Catalogue")}`
               },
               { 
                  "id":3,
                  "sname":`${t("MSDS")}`
               },
               { 
                  "id":4,
                  "sname":`${t("PromotionCenter")}`
               },
               { 
                "id":4,
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
    <div class="header-main">
    <div class="h-flag">
        <span id="en"onClick={() => changeLanguage('en')}>{Imgfunction('flag2')}</span>
        <span id="jap"onClick={() => changeLanguage('jap')}>{Imgfunction('flag1')}</span>
      </div>
     
    <div
      class={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
       <div class="h-logo">{Imgfunction('logo')}</div>  
      <List>
        {list.items.map((text,index) => (
         <> 
          <ListItem button  key={index} ref={domRef} onClick={()=>handleClick(index)}>
          <ListItemText primary={text.name} /> 
        </ListItem>
        <Divider />
        <Collapse in={expanded[index]}  key={text.name}  timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {text.submenu.map((submenus, index)=>{ return(<ListItem button  key={submenus.id} className={classes.nested} >
              <ListItemText key={submenus.id} primary={submenus.sname} />
            </ListItem>)})}
          </List>
        </Collapse>
        </>
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