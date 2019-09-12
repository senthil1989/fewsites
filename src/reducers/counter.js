import { INCREMENT, DECREMENT} from '../actions/counter';

const InitialState={
    counter:0
}

const reducer =(state=InitialState, action)=>{
    
    // eslint-disable-next-line default-case
    switch(action.type){
        case INCREMENT: 
        var newState={...state} 
        newState.counter++
        return newState;
        case DECREMENT:
                var newState={...state} 
                newState.counter--
                return newState;
            default:
                    return state
    }
}
export default reducer;