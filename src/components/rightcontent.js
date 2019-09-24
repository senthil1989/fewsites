import React from 'react';
// import Submenu from './sidemenu';
import MessageCeo from './messageceo';
import HistoryCeo from './history';
import SideBar from './sidebar';
import ApplyForm from './apply.js'
import Employment from './employment.js';
import NoticeTable from './notice.js';
import MsdsTable from './msds.js';
import PromotionCenter from './promotioncenter';
import InquiryForm from './inquiryform';
import Catalogue from './catalogue';

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

function RightContent(props){
  const {match}=props
  // const classes = useStyles();
  console.log(props)
  const renderContent=(props)=>{
   
    if(match.url ==="/message"){
    return(
        <div index={0}>
        <MessageCeo/>
      </div>
      )
    }
    else if(match.url ==="/history"){
      return(
        <div  index={1}>
          <HistoryCeo/>
        </div>
        )
      }
      else if(match.url ==="/apply"){
        return(
          <div  index={2}>
            <ApplyForm/>
          </div>
          )
        }
        else if(match.url ==="/employment"){
          return(
            <div  index={3}>
              <Employment/>
            </div>
            )
          }
          else if(match.url ==="/notice"){
            return(
              <div  index={4}>
                <NoticeTable/>
              </div>
              )
            }
            else if(match.url ==="/msds"){
              return(
                <div  index={4}>
                  <MsdsTable/>
                </div>
                )
              }
              else if(match.url ==="/promotioncenter"){
                return(
                  <div  index={4}>
                    <PromotionCenter/>
                  </div>
                  )
                }
                else if(match.url ==="/inquiry"){
                  return(
                    <div  index={4}>
                      <InquiryForm/>
                    </div>
                    )
                  }
                  else if(match.url ==="/catalogue"){
                    return(
                      <div  index={4}>
                        <Catalogue/>
                      </div>
                      )
                    }
  }
  return(
      <>
      <div className="s-fixebar">       
      <SideBar content={props} />
      </div>
      <div className="s-right-top">
      {renderContent()}
      </div>
     
    </>
  )
}

export default RightContent;