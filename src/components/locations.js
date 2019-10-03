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

function LocationCeo() {
  
  return (
    <React.Fragment>
      <div>
        <CommonTitle title={"Location"} />
      </div>
      <div>
        <div>{Imgfunction("map1")}</div>
      </div>
      <div>
        <div>{Imgfunction("map2")}</div>
      </div>
      <div>
        <div>{Imgfunction("location1")}</div>
      </div>
    </React.Fragment>
  );
}

export default LocationCeo;
