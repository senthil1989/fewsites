import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';

const subcontent1={
    title:{header:'Description'},
    para:{para:`% GERMAIN in H2 
    CAS No. 7782-65-2, UN No. 1954, EU No.231-961-6`} 
}
const subcontent2={
    title:{header:'Application'},
    para:{para:"Semiconductor Gas"} 
}

function GasComponenttwo(){
return(
    <>
        <CommonTitle title={"Germain - Pure GeH₄ / GeH₄ Mix"} />
        <GastextComponent subcontent={subcontent1}/>
        <GastextComponent subcontent={subcontent2}/>
        <section class="vectable pane-vScroll">
                        <table class="table table-striped">
                            <thead>
                              <tr>
                                <th>Characteristic</th>
                                <th>Specification Value</th>
                                <th>Analysis</th>
                                <th>Unit</th>
                                <th>Measured Type</th>
                                <th>Measurement Phase</th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Chemical Purity</td>
                            <td>99.999</td>
                            <td>&gt;99.999</td>
                            <td>%</td>
                            <td>By Difference</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Hydrogen</td>
                            <td>50</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Nitrogen</td>
                            <td>2</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Oxygen / Argon</td>
                            <td>0.5</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Carbon Monoxide</td>
                            <td>1</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Methane</td>
                            <td>1</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Carbon Dioxide</td>
                            <td>2</td>
                            <td>ND &lt; 0.2</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Digermane</td>
                            <td>20</td>
                            <td>ND &lt; 1</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Trigemane</td>
                            <td>1</td>
                            <td>ND &lt; 1</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Chlorogermanes</td>
                            <td>5</td>
                            <td>ND &lt; 5</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>Germoxanes</td>
                            <td>5</td>
                            <td>ND &lt; 5</td>
                            <td>PPM</td>
                            <td>GC-PDD</td>
                            <td>Vapour</td>
                        </tr>
                        <tr>
                            <td>H₂O</td>
                            <td>1</td>
                            <td>ND &lt; 1</td>
                            <td>PPM</td>
                            <td>Hygrometer</td>
                            <td>Vapour</td>
                        </tr>
                    </tbody>
                </table>
            </section>
    </>
)
}

export default GasComponenttwo;