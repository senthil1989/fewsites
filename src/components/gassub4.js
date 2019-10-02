import React from 'react';
import CommonTitle from '../components/title';
import GastextComponent from './gastextcomponent';

const subcontent1={
  title:{header:'Description'},
  para:{para:`Liquefied gas, Toxic, Flammable, N.O.S`} 
}
const subcontent2={
  title:{header:'Application'},
  para:{para:`HFB is used for critical dimension dielectric etch applications.
  Higher SiO2 etch rates can be achieved with better selectivity.
  HFB is a colorless, odorless, and flammable liquefied gas.`} 
}

function GasComponentfour(){
return (
  <>
    <CommonTitle title={"1, 3 Hexalfluorobutadiene - C₄F₆"} />
    <GastextComponent subcontent={subcontent1} />
    <GastextComponent subcontent={subcontent2} />
    <section class="vectable pane-vScroll">
      <table class="table table-striped">
        <thead>
          <tr>
            <th colspan="2">Constituent concentration</th>
            <th>Specification</th>
            <th>Actual</th>
            <th rowspan="2">LDL's</th>
          </tr>
          <tr>
              <th>1, 3 Hexafluorobutadiene</th>
              <th>C₄F₆</th>
              <th>99.99%</th>
              <th>≥ 99.99%</th>
            </tr>
        </thead>
        <tbody className="gasrow">
          <tr>
            <td>Nitrogen</td>
            <td>N₂</td>
            <td>&lt; 40 ppmv</td>
            <td>29.2 ppmv</td>
            <td>&lt; 0.5 ppmv</td>
          </tr>
          <tr>
            <td>Oxygen, Argon</td>
            <td>O₂, Ar</td>
            <td>&lt; 10 ppmv</td>
            <td>7.3 ppmv</td>
            <td>&lt; 0.5 ppmv</td>
          </tr>
          <tr>
            <td>Moisture</td>
            <td>H₂O</td>
            <td>&lt; 20 ppmv</td>
            <td>3.4 ppmv</td>
            <td>&lt; 0.2 ppmv</td>
          </tr>
          <tr>
            <td>Carbon Dioxide</td>
            <td>CO₂</td>
            <td>&lt; 20 ppmv</td>
            <td>&lt; 1.1 ppmv</td>
            <td>&lt; 0.5 ppmv</td>
          </tr>
          <tr>
            <td>Other Fluorocarbons</td>
            <td></td>
            <td>&lt; 200 ppmv</td>
            <td>8.5 ppmv</td>
            <td>&lt; 1 ppmv</td>
          </tr>
          <tr>
            <td>Other Hydrocarbons</td>
            <td></td>
            <td>&lt; 250 ppmv</td>
            <td>&lt; 1 ppmv</td>
            <td>&lt; 1 ppmv</td>
          </tr>
          <tr>
            <td>Hydrogen Fluoride</td>
            <td>HF</td>
            <td>&lt; 10 ppmv</td>
            <td>&lt; 5 ppmv</td>
            <td>&lt; 5 ppmv</td>
          </tr>
          <tr>
            <td>Isopropyl Alcohol</td>
            <td>C₂H₈O</td>
            <td>&lt; 20 ppmv</td>
            <td>&lt; 1 ppmv</td>
            <td>&lt; 1 ppmv</td>
          </tr>
        </tbody>
      </table>
    </section>
  </>
);
}

export default GasComponentfour;