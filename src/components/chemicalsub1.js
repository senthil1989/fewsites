import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';
import Inquirybtn from './inquirybtn';
import Imgfunction from "../common/images";
const subcontent={
    title:{head1:'Description',head2:'Application'},
    para:{para1:"CAS No. 7664-38-2" ,para2:`Semiconductor Fabrication (Etching Process)
    Form : Liquid / Acid
    Effect : Etching Nitride off the SiO2 Water
    Usage : Wet Etching Process in Semiconductor`} 
}

function ChemicalComponentone(){
return(
    <>
        <CommonTitle title={"Phosphoric Acid (H₃PO₄)"} />
        <div className="chemicalsub">
        <span>{Imgfunction('cheSub1')}</span>
        <GastextComponent subcontent={subcontent} /> </div>
        <Inquirybtn name={"Product inquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default ChemicalComponentone;