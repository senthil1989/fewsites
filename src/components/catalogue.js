import React from "react";
import Imgfunction from "../common/images";
import CommonTitle from "../components/title";

const Catalogue = () => {
  return (
    <>
      <div>
        <CommonTitle title={"Catalogue"} />
      </div>
      <div>
        <div>{Imgfunction("catalogueBanner")}</div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              BEAD
              </figcaption>
            </figure>
          </div>
          <div class="col-sm ">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              FEWM_회사소개서
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};
export default Catalogue;
