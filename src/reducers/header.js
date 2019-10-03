// /* eslint-disable default-case */
import {TABS} from '../actions/header';

const headerState={
    value:'',
    sidebarName: "",
    sideContent: "",
    icon: "",
    indexes:0,
}

export const headerReducer =(state=headerState, action)=>{
    const{type ,menu,newValue,index} =action
    // eslint-disable-next-line default-case
    switch(type){
                case TABS:
                        var hnewState={...state};
                        hnewState.value=newValue;
                        hnewState.icon=menu.icon;
                        hnewState.sideContent=menu.sideContent;
                        hnewState.sidebarName=menu.sidebarName;
                        hnewState.indexes=index;
                    return hnewState;
            default:
                return 0;
    }
}
