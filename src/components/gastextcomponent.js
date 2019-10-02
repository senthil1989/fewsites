import React from "react";

const GastextComponent = ({subcontent}) => {
    console.log(subcontent)
    const {title,para}=subcontent
function rendertext(){
  if(title.header !== '' && para.para !== ''){
    return(
        <div>
          <h5>{title.header}</h5>
          <p>{para.para}</p>
        </div>
    )
  }
  else {
    return(
      <div>
          <h5>{title.header}</h5>
       </div>
    )
  }

}

  return (
    <>
      <div className="gasdesc">
        {rendertext()}        
      </div>
    </>
  );
};

export default GastextComponent;
