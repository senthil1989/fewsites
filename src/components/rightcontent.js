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
import GasComponentone from './gassub1';
import GasComponenttwo from './gassub2';
import GasComponentthree from './gassub3';
import GasComponentfour from './gassub4';
import GasComponentfive from './gassub5';
import ChemicalComponentone from './chemicalsub1';
import ChemicalComponenttwo from './chemicalsub2';
import ChemicalComponentthree from './chemicalsub3';


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
                      <div  index={5}>
                        <Catalogue/>
                      </div>
                      )
                    }
                    else if(match.url ==="/gases/Si₂H₆"){
                      return(
                        <div  index={6}>
                          <GasComponentone/>
                        </div>
                        )
                      }
                      else if(match.url ==="/gases/GeH₄"){
                        return(
                          <div  index={7}>
                            <GasComponenttwo/>
                          </div>
                          )
                        }
                        else if(match.url ==="/gases/C₃H₆"){
                          return(
                            <div  index={6}>
                              <GasComponentthree/>
                            </div>
                            )
                          }
                          else if(match.url ==="/gases/C₄F₆"){
                            return(
                              <div  index={7}>
                                <GasComponentfour/>
                              </div>
                              )
                            }
                            else if(match.url ==="/gases/C₃F₈"){
                              return(
                                <div  index={7}>
                                  <GasComponentfive/>
                                </div>
                                )
                              }
                              else if(match.url ==="/chemical/H₃PO₄"){
                                return(
                                  <div  index={7}>
                                    <ChemicalComponentone/>
                                  </div>
                                  )
                                }
                                else if(match.url ==="/chemical/HF"){
                                  return(
                                    <div  index={7}>
                                      <ChemicalComponenttwo/>
                                    </div>
                                    )
                                  }
                                  else if(match.url ==="/chemical/Anti-rust-coating"){
                                    return(
                                      <div  index={7}>
                                        <ChemicalComponentthree/>
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