import React from "react";
import CommonTitle from "../components/title";
import Imgfunction from "../common/images";

export default function MsdsTable() {
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  //   function FormRow() {
  //     return (
  //       <React.Fragment>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>{Imgfunction("catalogue")}</Paper>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>{Imgfunction("catalogue")}</Paper>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <Paper className={classes.paper}>{Imgfunction("catalogue")}</Paper>
  //         </Grid>
  //       </React.Fragment>
  //     );
  //   }

  return (
    <>
      <div>
        <CommonTitle title={"Employment"} />
      </div>
      <div>{Imgfunction("recruit")}</div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              wefw
              </figcaption>
            </figure>
          </div>
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              GAS- English Version
              </figcaption>
            </figure>
          </div>
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              GAS - Korean Version
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              CHEMICAL-인산
              </figcaption>
            </figure>
          </div>
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              BEAD-RF Series
              </figcaption>
            </figure>
          </div>
          <div class="col-sm">
            <figure class="figure">
              {Imgfunction("book_icon")}
              <figcaption class="figure-caption">
              BEAD-FEsphere SS, SD Series
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
