import React from "react";
// import {connect} from 'react-redux';
// import {handleClick} from '../actions/header';
import "../styles/drawer.scss";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {handleChange} from '../actions/header';
import SidebarHeader from './sidebarheader';
import "../common/assets/css/styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Imgfunction from "../common/images";
import { useTranslation } from "react-i18next";
// import headerReducer from '../reducers/header';

const useStyles = makeStyles({
  list: {
    width: 350
  }
});

function SideBar(props) {
    const{handleChange,value}=props;
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  // const domRef = React.useRef(null);
  // const changeLanguage = lng => {
  //   i18n.changeLanguage(lng);
  // };

  const getItems = () => {
    var json = {
      About: [
        {
          id:"message",
          keyid:0,
          path: "/message",
          sidebarName: "MessagefromCEO",
          sideContent: "MessagefromCEO",
          icon: "greet"
        },
        {
          id:"history",
          keyid:1,
          path: "/history",
          sidebarName: "History",
          sideContent: "History",
          icon: "his"
        },
        {
          id:"location",
          keyid:2,
          path: "/location",
          sidebarName: "Location",
          sideContent: "Location",
          icon: "loc",
        }
      ],
      Product: [
        {
          id:"gases",
          keyid:3,
          path: "/gases",
          sidebarName: "Gases",
          sideContent: "MessagefromCEO",
          icon: "vector_1"
        },
        {
          id:"chemical",
          keyid:4,
          path: "/chemical",
          sidebarName: "Chemical",
          sideContent: "MessagefromCEO",
          icon: "vector_2"
        },
        {
          id:"gasket",
          keyid:5,
          path: "/gasket",
          sidebarName: "Gasket",
          sideContent: "MessagefromCEO",
          icon: "vector_3"
        },
        {
          id:"bead",
          keyid:6,
          path: "/bead",
          sidebarName: "Bead",
          sideContent: "MessagefromCEO",
          icon: "vector_4"
        },
        {
          id:"fdt",
          keyid:7,
          path: "/fdt",
          sidebarName: "FDT",
          sideContent: "MessagefromCEO",
          icon: "vector_5"
        },
        {
          id:"shuttervalve",
          keyid:8,
          path: "/shuttervalve",
          sidebarName: "ShutterValve",
          sideContent: "MessagefromCEO",
          icon: "shutter"
        }
      ],
      Employment: [
        {
          id:"employment",
          keyid:9,
          path: "/employment",
          sidebarName: "Employment",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        },
        {
          id:"apply",
          keyid:10,
          path: "/apply",
          sidebarName: "Apply",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        }
      ],
      Inquiry: [
        {
          id:"notice",
          keyid:11,
          path: "/notice",
          sidebarName: "Notice",
          sideContent: "MessagefromCEO",
          icon: "notice"
        },
        {
          id:"catalogue",
          keyid:12,
          path: "/catalogue",
          sidebarName: "Catalogue",
          sideContent: "MessagefromCEO",
          icon: "catalogue"
        },
        {
          id:"msds",
          keyid:13,
          path: "/msds",
          sidebarName: "MSDS",
          sideContent: "MessagefromCEO",
          icon: "catalogue"
        },
        {
          id:"promotioncenter",
          keyid:14,
          path: "/promotioncenter",
          sidebarName: "PromotionCenter",
          sideContent: "MessagefromCEO",
          icon: "prRoom"
        },
        {
          id:"inquiry",
          keyid:15,
          path: "/inquiry",
          sidebarName: "Inquiry",
          sideContent: "MessagefromCEO",
          icon: "recruitIcon"
        }
      ]
    };

    return json;
  };

  const list = getItems();
  const sideList = props => {
    const {match} = props.content;
    if (
      match.url === "/message" ||
      match.url === "/history" ||
      match.url === "/location"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
          <SidebarHeader match={match} list={list.About}value={value} />
            <List>
              {list.About.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} >
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        
                        onClick={()=>handleChange(submenus.id,submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    }
   else if (
      match.url === "/gases" ||
      match.url === "/chemical" ||
      match.url === "/gasket" ||
      match.url === "/bead" ||
      match.url === "/fdt" ||
      match.url === "/shuttervalve"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
          <SidebarHeader match={match} list={list.Product}value={value} />
            <List>
              {list.Product.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} >
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={()=>handleChange(submenus.id,submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    }
    else if (
      match.url === "/employment" ||
      match.url === "/apply"
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
          <SidebarHeader match={match} list={list.Employment}value={value} />
            <List>
              {list.Employment.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} >
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={()=>handleChange(submenus.id,submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    }
    else if (
      match.url === "/notice" ||
      match.url === "/catalogue" ||
      match.url === "/location"  ||
      match.url === "/msds"  ||
      match.url === "/promotioncenter"  ||
      match.url === "/inquiry" 
    ) {
      return (
        <div className="header-main">
          <div className={classes.list} role="presentation">
          <SidebarHeader match={match} list={list.Inquiry}value={value} />
            <List>
              {list.Inquiry.map((submenus, index) => {
                return (
                  <Link to={submenus.path}>
                    <ListItem button key={submenus.sidebarName + "sub"} >
                      <ListItemText
                        key={submenus.sidebarName}
                        primary={submenus.sidebarName}
                        onClick={()=>handleChange(submenus.id,submenus)}
                      />
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div>{sideList(props)}</div>
    </>
  );
}
function mapStateToProps(state) {
  
    const {headerReducer}=state;
    console.log(state)
      return {value:headerReducer};
    }
  
    const mapDispatchToProps = dispatch => {
      return {
        // dispatching plain actions
        handleChange: (id,submenus) =>{setTimeout(() => {
          // Yay! Can invoke sync or async actions with `dispatch`
          dispatch(handleChange(id,submenus));
        }, 10);},
  
      }
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
export default  connect(mapStateToProps, mapDispatchToProps)(SideBar);;
