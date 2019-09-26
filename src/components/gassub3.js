import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';

const subcontent={
    title:{head1:'Description',head2:'Application'},
    para:{para1:`Flammable Liquid, N.O.S.; 3(Fammable); UN 1993` ,para2:"General Industrial, Synthetic & Analytical chemistry"} 
}

function GasComponentthree(){
return(
    <>
        <CommonTitle title={"Propylene Oxide Balance Blend - C₃H₆"} />
        <GastextComponent subcontent={subcontent}/> 
        <section class="vectable pane-vScroll">
                            <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th colspan="2">Characteristic</th>
                                    <th>Nominal</th>
                                    <th>Actual</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Propylene</td>
                                <td>C₃H₆</td>
                                <td>99.99%</td>
                                <td>≥ 99.99%</td>
                            </tr>
                            <tr>
                                <td>Nitrogen</td>
                                <td>N₂</td>
                                <td>&lt; 5 ppmv</td>
                                <td>2.2 ppmv</td>
                            </tr>
                            <tr>
                                <td>Oxygen</td>
                                <td>O₂</td>
                                <td>&lt; 1 ppmv</td>
                                <td>0.8 ppmv</td>
                            </tr>
                            <tr>
                                <td>Carbon Dioxide</td>
                                <td>CO₂</td>
                                <td>&lt; 1 ppmv</td>
                                <td>&lt; 0.5 ppmv</td>
                            </tr>
                            <tr>
                                <td>Moisture</td>
                                <td>H₂O</td>
                                <td>&lt; 2 ppmv</td>
                                <td>1.6 ppmv</td>
                            </tr>
                            <tr>
                                <td>Other Hydrocarbons</td>
                                <td></td>
                                <td>&lt; 90 ppmv</td>
                                <td>33 ppmv</td>
                            </tr>                                 
                        </tbody>
                    </table>
                </section>
    </>
)
}

export default GasComponentthree;