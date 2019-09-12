import React from 'react';
import { Route, Link } from 'react-router-dom';

const User=({match})=>{
    const {params}=match
    return(
        <>
        <h1>panni</h1>
        <h3>{params.id}</h3>
        </>
    )
}
function Debraj({match}){
    const { url } = match
    
    return(
        <>
        <ul>
            <li><Link to='/debraj/1'>User1</Link></li>
            <li><Link to='/debraj/2'>User2</Link></li>
            <li><Link to='/debraj/3'>User3</Link></li>
        </ul>
        <Route path='/debraj/:id' component={User} />
        </>
    )
}

export default Debraj;