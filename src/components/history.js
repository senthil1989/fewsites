import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Imgfunction from "../common/images";
import CommonTitle from "../components/title";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  console.log(i18n.languages)
  const classes = useStyles();
  const [text1, setTextval1] = useState(false);
  const [text2, setTextval2] = useState(false);
  const [text3, setTextval3] = useState(false);
  const [text4, setTextval4] = useState(false);
  const [text5, setTextval5] = useState(false);
  const [text6, setTextval6] = useState(false);

  function valuetext(value){
    if (value > 80 && value <= 100) {
      setTextval1(true);
      setTextval2(false);
      setTextval3(false);
      setTextval4(false);
      setTextval5(false);
      setTextval6(false);
      return value ;
    } else if (value > 65 && value < 80) {
      setTextval1(false);
      setTextval2(true);
      setTextval3(false);
      setTextval4(false);
      setTextval5(false);
      setTextval6(false);
    } else if (value > 50 && value < 65) {
      setTextval1(false);
      setTextval2(false);
      setTextval3(true);
      setTextval4(false);
      setTextval5(false);
      setTextval6(false);
    } else if (value > 35 && value < 50) {
      setTextval1(false);
      setTextval2(false);
      setTextval3(false);
      setTextval4(true);
      setTextval5(false);
      setTextval6(false);
    } else if (value > 20 && value < 35) {
      setTextval1(false);
      setTextval2(false);
      setTextval3(false);
      setTextval4(false);
      setTextval5(true);
      setTextval6(false);
    } else if (value < 20) {
      setTextval1(false);
      setTextval2(false);
      setTextval3(false);
      setTextval4(false);
      setTextval5(false);
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
            <div className={` ${i18n.languages[0] === 'en' ? 'L2018':'korL2018'} ${text2 ? "text_active" : null}`}>
              <h1>2018</h1>
              <h5>{t("Historypage", { context: "2018April" })}</h5>
              <h5>{t("Historypage", { context: "2018February" })}</h5>
            </div>
            <div className={`${i18n.languages[0] === 'en' ? 'L2016':'korL2016'} ${text4 ? "text_active" : null}`}>
              <h1>2016</h1>
              <h5>
              {t("Historypage", { context: "2016October" })}
              </h5>
              <h5>
              {t("Historypage", { context: "2016April" })}
              </h5>
              <h5>{t("Historypage", { context: "2016February" })}</h5>
            </div>
            <div class={`${i18n.languages[0] === 'en' ? 'L2014':'korL2014'} ${text6 ? "text_active" : null}`}>
              <h1>2012</h1>
              <h5>{t("Historypage", { context: "2012April" })}</h5>
              <h5>{t("Historypage", { context: "2012April1" })}</h5>
            </div>
          </div>
          <div class="hisRight">
            <div class={`${i18n.languages[0] === 'en' ? 'R2019':'korR2019'} ${text1 ? "text_active" : null}`}>
              <h1>2019</h1>
              <h5>
              {t("Historypage", { context: "2019April" })}
              </h5>
              <h5>
              {t("Historypage", { context: "2019March" })}
              </h5>
              <h5>
              {t("Historypage", { context: "2019January" })}
              </h5>
            </div>
            <div class={`${i18n.languages[0] === 'en' ? 'R2017':'korR2017'} ${text3 ? "text_active" : null}`}>
              <h1>2017</h1>
              <h5>
              {t("Historypage", { context: "2017February" })}
              </h5>
            </div>
            <div class={`${i18n.languages[0] === 'en' ? 'R2015':'korR2015'} ${text5 ? "text_active" : null}`}>
              <h1>2014</h1>
              <h5>{t("Historypage", { context: "2014October" })}</h5>
              <h5>{t("Historypage", { context: "2016May" })}</h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HistoryCeo;
