import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import CommonTitle from "../components/title";
import Imgfunction from "../common/images";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "40px",
    borderTop: "2px solid #3d3939"
  },
  mobtextField: {
    marginLeft: "30px",
    marginRight: theme.spacing(1),
    width: "100px"
  },
  textField: {
    marginLeft: "30px",
    marginRight: theme.spacing(1)
  },
  textareaField: {
    marginLeft: "30px",
    marginRight: theme.spacing(1),
    display: "block",
    width: "70%",
    marginTop: "16px",
    marginBottom: "16px",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#495057",
    backgroundColor: " #fff",
    backgroundImage: "none",
    backgroundClip: "padding-box",
    border: " 1px solid #ced4da",
    borderRadius: " .25rem",
    transition: " border-color ease-in-out .15s,box-shadow ease-in-out .15s"
  },
  chooseField: {
    marginTop: "16px",
    marginBottom: "16px",
    marginLeft: "30px",
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  },
  button: {
    margin: "8px",
    padding: "30px 90px",
    backgroundColor: "#f4f4f4",
    color: "#a29b9b",
    fontSize: "16px",
    border: "none",
    cursor: "pointer"
  }
}));

function InquiryForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <div>
        <CommonTitle title={"Inquiry"} />
      </div>
      <div>{Imgfunction("inquirybanner")}</div>
      <div className="vertical-line">{Imgfunction('greetLine')}</div>
      <h1 className="canIhelp">Can I help you? </h1>
      <form className={classes.container} noValidate autoComplete="off">
        <div className="formrow">
          <div className="formlabel">
            <span>Name</span>
          </div>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            defaultValue="Bare"
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "" }}
          />
        </div>
        <div className="formrow">
          <div className="formlabel">
            <span>Contact</span>
          </div>
          <TextField
            id="outlined-bare"
            className={classes.mobtextField}
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "" }}
          />
          <TextField
            id="outlined-bare"
            className={classes.mobtextField}
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "bare" }}
          />
          <TextField
            id="outlined-bare"
            className={classes.mobtextField}
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "bare" }}
          />
        </div>
        <div className="formrow">
          <div className="formlabel">
            <span>E-mail</span>
          </div>
          <TextField
            id="outlined-bare"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            inputProps={{ "aria-label": "bare" }}
          />
        </div>
        <div className="formrow">
          <div className="formlabel">
            <span>Contents</span>
          </div>
          <TextareaAutosize
            className={classes.textareaField}
            aria-label="minimum height"
            rows={9}
            placeholder="Minimum 3 rows"
          />
          ;
        </div>
        <div className="formrow">
          <div className="formlabel">
            <span>Attachment</span>
          </div>
          <input
            accept="image/*"
            className={classes.chooseField}
            id="text-button-file"
            multiple
            type="file"
          />
        </div>

        <div className="checkbtn">
          <Button variant="contained" className={classes.button}>
            {" "}
            SEND
          </Button>
        </div>
      </form>
    </>
  );
}
export default InquiryForm;
