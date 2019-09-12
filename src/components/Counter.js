import React from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next'


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
    return {counter:state.counter};
  }

  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),

    }
  }


  export default  connect(mapStateToProps, mapDispatchToProps)(Counter)