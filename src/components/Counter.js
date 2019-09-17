import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';
import {increment, decrement} from '../actions/counter';


const Counter =({counter,increment, decrement})=>{
  const {t} =useTranslation();
    return (
        <div>
         
        <div>Incremental</div>
        <p>{counter}</p>
        <p>{t("Introduction")}</p>
        <button onClick={increment}>+</button>
        <div>Decremental</div>
        <p></p>
        <button onClick={decrement}>-</button>
        </div>
    )
}
function mapStateToProps(state) {
  const {counter}=state.counterReducer;
    return {counter:counter};
  }

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      increment: () =>{dispatch(increment())},
      decrement: () => dispatch(decrement()),

    }
  }


  export default  connect(mapStateToProps, mapDispatchToProps)(Counter)