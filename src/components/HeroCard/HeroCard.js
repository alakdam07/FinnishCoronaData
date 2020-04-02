import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  paper: {
    height: 200,
    textAlign: "center",
    padding: theme.spacing(3), // 30, // it's recommended to use theme.spacing for margins and paddings
    borderRadius: 25
  },
  subText: {
    fontWeight: "fontWeightMedium",
    paddingBottom: 3,
    fontSize: 18,
    fontFamily: "Roboto Condensed"
  }
}));

function HeroCard({ districts, source, date }) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.subText}>
        Health care district: {districts ? districts : "Unknown"}
      </Typography>
      <Typography className={classes.subText}>
        Infection source of country: {source ? source : "Unknown"}
      </Typography>
      <Typography className={classes.subText}>
        Date of infected: {moment(date).format("LLLL")}
      </Typography>
    </Paper>
  );
}

export default HeroCard;
