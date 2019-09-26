import React from "react";

const GastextComponent = ({subcontent}) => {
    console.log(subcontent)
    const {title,para}=subcontent
  return (
    <>
      <div className="gasdesc">
        <div>
          <h5>{title.head1}</h5>
          <p>{para.para1}</p>
        </div>
        <div>
          <h5>{title.head2}</h5>
          <p>{para.para2}</p>
        </div>
      </div>
    </>
  );
};

export default GastextComponent;
