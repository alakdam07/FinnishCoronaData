import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
const useStyles = makeStyles(theme => ({
  paper: {
    height: 200,
    textAlign: "center",
    padding: theme.spacing(3),
    borderRadius: 25
  },
  subText: {
    fontWeight: "fontWeightMedium",
    paddingBottom: 3,
    fontSize: 18,
    fontFamily: "Roboto Condensed"
  }
}));

function HeroCard({ districts, date }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Typography className={classes.subText}>
          Health care district: {districts ? districts : "Unknown"}
        </Typography>

        <Typography className={classes.subText}>
          Date of death: {moment(date).format("LLLL")}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default HeroCard;
