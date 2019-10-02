import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';

const subcontent1={
    title:{header:'Description'},
    para:{para:"CAS No. 1590-87-0"} 
}
const subcontent2={
    title:{header:'Application'},
    para:{para:"Semiconductor Gas"} 
}

function GasComponentone(){
return(
    <>
        <CommonTitle title={"Disilane - Si₂H₆"} />
        <GastextComponent subcontent={subcontent1} />
        <GastextComponent subcontent={subcontent2} /> 
        <section class="vectable pane-vScroll">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Paramerter</th>
                                        <th>Spec</th>
                                        <th>Detection Limit</th>
                                        <th>Analysis</th>
                                        <th>Measured Value</th>
                                        <th>Unit</th>
                                        <th>Measurement Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Cylinder Pressure</td>
                                        <td></td>
                                        <td></td>
                                        <td>33</td>
                                        <td></td>
                                        <td>PSIG</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Chemical Purity</td>
                                        <td>99.998</td>
                                        <td>99.998</td>
                                        <td>&gt;99.998</td>
                                        <td>By Difference</td>
                                        <td>%</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Chlorosilanes</td>
                                        <td>0.2</td>
                                        <td>0.2</td>
                                        <td>ND &lt; 0.2</td>
                                        <td>Validation</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>CO</td>
                                        <td>1</td>
                                        <td>0.1</td>
                                        <td>ND &lt; 0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>CO₂</td>
                                        <td>1</td>
                                        <td>0.1</td>
                                        <td>ND &lt; 0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Hydrogen</td>
                                        <td>200</td>
                                        <td>0.1</td>
                                        <td>0.5</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Water</td>
                                        <td>1</td>
                                        <td>0.5</td>
                                        <td>ND &lt; 0.5</td>
                                        <td>Hygrometer</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Higher Silanes</td>
                                        <td>50</td>
                                        <td>5</td>
                                        <td>0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Nitrogen</td>
                                        <td>1</td>
                                        <td>0.1</td>
                                        <td>ND &lt; 0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>O₂ + Ar</td>
                                        <td>1</td>
                                        <td>0.1</td>
                                        <td>ND &lt; 0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Silane</td>
                                        <td>1000</td>
                                        <td>5</td>
                                        <td>11</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Siloxanes</td>
                                        <td>5</td>
                                        <td>5</td>
                                        <td>ND &lt; 5</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>THC as CH₄</td>
                                        <td>1</td>
                                        <td>0.1</td>
                                        <td>ND &lt; 0.1</td>
                                        <td>GC</td>
                                        <td>PPMV</td>
                                        <td>Vapour</td>
                                    </tr>
                                    <tr>
                                        <td>Requested Net Weight</td>
                                        <td>10</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>KG</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Actual Net Weight</td>
                                        <td></td>
                                        <td></td>
                                        <td>10088.7</td>
                                        <td></td>
                                        <td>GM</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
    </>
)
}

export default GasComponentone;