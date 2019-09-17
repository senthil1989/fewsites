// /* eslint-disable default-case */
// import { EXPAND, INBOX, STARRED } from '../actions/header';

// const headerState={
//     exOpen:false,
// }

// export  const headerReducer =(state=headerState, action)=>{
//     // eslint-disable-next-line default-case
//     console.log(action.type)
//     switch(action.type){
        
//         case EXPAND:
//             switch(action.text){                
//                 case INBOX:
//                         console.log(action.text)
//                         var hnewState={...state}
//                         hnewState.exOpen=!hnewState.open
//                     return hnewState.exOpen;
//                 case STARRED:
//                         let newState={...state}
//                         hnewState.exOpen=!hnewState.open
//                     return newState.exOpen; 
//                     default:
//                             return false   
//             }
//             default:
//                 return false;
//     }
// }
