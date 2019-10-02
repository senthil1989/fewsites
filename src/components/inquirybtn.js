import React from 'react';

const Inquirybtn=({name,img})=>{

    if(name =="Xentech site"){
        return (
            <button  className="inquirybtn"><a href='https://www.xentech.kr' target="_blank">{name}{img}</a></button>
        )
    }
    else {
        console.log("product");
    return (
        <button className="inquirybtn">{name}{img}</button>
    )
    }
}
export default Inquirybtn;