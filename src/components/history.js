import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Imgfunction from "../common/images";
import CommonTitle from "../components/title";

const useStyles = makeStyles(theme => ({
  root: {
    height: "997px",
    marginTop: "40px",
    textAlign: "center"
  },
  markLabel: {
    fontSize: "3rem !important",
    width: "200px",
    whiteSpace: "break-spaces"
  }
}));

const marks = [
  {
    value: 0,
    label: ""
  },
  {
    value: 20,
    label: ""
  },
  {
    value: 40,
    label: ""
  },
  {
    value: 60,
    label: ""
  },
  {
    value: 80,
    label: ""
  },
  {
    value: 100,
    label: ""
  }
];

function HistoryCeo() {
  const classes = useStyles();
  const [text1, setTextval1] = useState(false);
  const [text2, setTextval2] = useState(false);
  const [text3, setTextval3] = useState(false);
  const [text4, setTextval4] = useState(false);
  const [text5, setTextval5] = useState(false);
  const [text6, setTextval6] = useState(false);

  function valuetext(value){
    if (value == 99) {
      console.log(value)
      setTextval4(true);
      setTextval1(false);
      return value ;
    } else if (value == 80) {
      setTextval1(true);
      setTextval4(false);
    } else if (value == 60) {
      setTextval3(true);
    } else if (value == 40) {
      setTextval4(true);
    } else if (value == 20) {
      setTextval5(true);
    } else if (value == 20) {
      setTextval6(true);
    }
  }
  return (
    <React.Fragment>
      <div>
        <CommonTitle title={"history"} />
      </div>
      <div>
        <div>{Imgfunction("hisBanner")}</div>
      </div>
      <div className={classes.root}>
        <Slider
          className={clsx(classes.markLabel)}
          orientation="vertical"
          defaultValue={[2019]}
          getAriaValueText={valuetext}
          aria-labelledby="vertical-slider"
          aria-label="senthil"
          marks={marks}
        />
        <div class="vecHistory wView">
          <div class="hisLeft">
            <div className={`L2018 ${text1 ? "text_active" : null}`}>
              <h1>2018</h1>
              <h5>April - Was INNO-BIZ certified.</h5>
              <h5>February - Was ISO9001:2015 and ISO14001:2015 certified.</h5>
            </div>
            <div className={`L2016 ${text2 ? "text_active" : null}`}>
              <h1>2016</h1>
              <h5>
                October - Development of 10㎛ bead for reflective films was
                completed.
              </h5>
              <h5>
                April - Development of 40㎛ bead for reflective films was
                completed.
              </h5>
              <h5>February - The research center was established.</h5>
            </div>
            <div class={`L2014 ${text3 ? "text_active" : null}`}>
              <h1>2012</h1>
              <h5>April - The corporate name was changed.</h5>
              <h5>April - Registered a venture business.</h5>
            </div>
          </div>
          <div class="hisRight">
            <div class={`R2019 ${text4 ? "text_active" : null}`}>
              <h1>2019</h1>
              <h5>
                April - Began construction of the 2nd place of business in
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeungpyeong
                (The 2nd Jeungpyeong Industrial Complex)
              </h5>
              <h5>
                March - Established high purity chemical analysis center for
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;semiconductors
              </h5>
              <h5>
                January - Registered a method of manufacturing optical bead.
              </h5>
            </div>
            <div class={`R2017 ${text5 ? "text_active" : null}`}>
              <h1>2017</h1>
              <h5>
                February - The 1st place of business in Jeungppyeong
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(The
                2nd Jeungpyeong Industrial Complex) was
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;completed.
              </h5>
            </div>
            <div class={`R2015 ${text6 ? "text_active" : null}`}>
              <h1>2014</h1>
              <h5>October - 6N 10%GeH₄/H₂ was supplied to SK hynix Inc.</h5>
              <h5>May - 4N8 Si₂H₆ was supplied to SK hynix Inc..</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HistoryCeo;
