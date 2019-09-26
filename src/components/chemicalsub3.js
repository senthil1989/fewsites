import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';
import Inquirybtn from './inquirybtn';
import Imgfunction from "../common/images";
const subcontent={
    title:{head1:'ChemicalComponentthree',head2:'Application'},
}
    

function ChemicalComponentthree(){
return(
    <>
        <CommonTitle title={"Functional anti-rust coating ENCOAT SERIES"} />
        <div className="chemicalsub">
        <span>{Imgfunction('cheSub2')}</span>
        </div>
        <Inquirybtn name={"Product inquiry"} img={Imgfunction('b_arrow')}/>
    </>
)
}

export default ChemicalComponentthree;