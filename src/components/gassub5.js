import React from "react";
import CommonTitle from "../components/title";
import GastextComponent from "./gastextcomponent";

const subcontent1={
  title:{header:'Description'},
  para:{para:`Halocarbon 218 (Perfluoropropane) (C3F8) is a colorless, nonflammable,
  nontoxic gas which is relatively stable and has a faintly sweet odor.
  Halocarbon 218 is shipped as a liquefied gas under its Own Vapour pressure
  (100 psig @ 70˚F)); UN 1993`} 
}
const subcontent2={
  title:{header:'Application'},
  para:{para:`Halocarbon 218 is used for plasma etching. The chemical composition of Halocarbon
  218 supplies a higher ratio of Fluorine to Carbon than any Of the other Halocarbon
  gases supplied by Electronic Fluorocarbons LLC.When Halocarbon 218 is exposed to
  the RF field generated in the etch process, a gas plasma is produced that will etch
  Silicon Dioxide or Silicon Nitrite with exellent selectivity.`} 
}

function GasComponentfive() {
  return (
    <>
      <CommonTitle title={"Perfluoropropane - Octafluoropropane - C₃F₈"} />
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

export default GasComponentfive;
