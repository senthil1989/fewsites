import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';
import Inquirybtn from './inquirybtn';
import Imgfunction from "../common/images";
const subcontent={
    title:{head1:'Description',head2:'Application'},
    para:{para1:"CAS No. 7664-39-2" ,para2:`Semiconductor Fabrication (Cleaning Process)
    Form : Liquid / Acid
    Effect : Cleaning Process in Semiconductor Processing
    Usage : Cleaning process in Semiconductor processing`} 
}

function ChemicalComponenttwo(){
return(
    <>
        <CommonTitle title={"Hydrofluoric Acid (HF))"} />
        <div className="chemicalsub">
        <span>{Imgfunction('cheSub2')}</span>
        <GastextComponent subcontent={subcontent} /> </div>
        <Inquirybtn name={"Product inquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default ChemicalComponenttwo;