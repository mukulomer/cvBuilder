import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 50
  },
  paper: {
    height: 340,
    width: 300
  },
  control: {
    padding: theme.spacing(2)
  }
}));

function Dashboard(props) {
  const handleClick = () => {
    props.history.push("/layouts");
  };

  return (
    <>
      <div className="container">
        <h1 className="title"> DashBoard </h1>
        <div className="add">
          <Button
            style={{ justifyContent: "flex-end" }}
            variant="outlined"
            color="primary"
            onClick={handleClick}
          >
            Add Cv
          </Button>
        </div>
        <div>
          <div className="cv_list"> List Of CVs </div>
        </div>
        {/* <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2, 3].map((value) => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid> */}
      </div>
      {/* dialog */}
    </>
  );
}
// list of cvs
// add button
export default Dashboard;
