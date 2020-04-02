import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  paper: {
    width: "390px",
    height: "200px",
    textAlign: "center",
    padding: "40px",
    borderRadius: "25px"
  },
  headLine: {
    paddingBottom: "10px"
  },
  ConfirmedheadText: {
    paddingBottom: "10px",
    fontWeight: "fontWeightMedium",
    fontFamily: "Roboto Condensed",
    color: "rgb(101, 221, 155)"
  },
  ConfirmedsubText: {
    fontWeight: "fontWeightMedium",
    color: "rgb(101, 221, 155)"
  },
  RecoveredheadText: {
    paddingBottom: "10px",
    fontWeight: "fontWeightMedium",
    fontFamily: "Roboto Condensed",
    color: "rgb(68, 155, 226)"
  },
  RecoveredsubText: {
    fontWeight: "fontWeightMedium",
    color: "rgb(68, 155, 226)"
  },
  DeathheadText: {
    paddingBottom: "10px",
    fontWeight: "fontWeightMedium",
    fontFamily: "Roboto Condensed",
    color: "#F65164"
  },
  DeathsubText: {
    fontWeight: "fontWeightMedium",
    color: "#F65164"
  }
}));

function InfoCard({ confirmed, recovered, death }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.headLine}>
        Coronavirus data in Finland:
      </Typography>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3" className={classes.ConfirmedheadText}>
            <svg
              style={{ width: "25px" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="check"
              className="svg-inline--fa fa-check fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              ></path>
            </svg>{" "}
            Confirmed
          </Typography>
          <Typography variant="h4" className={classes.ConfirmedsubText}>
            {confirmed}
          </Typography>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3" className={classes.RecoveredheadText}>
            <svg
              style={{ width: "25px" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="heartbeat"
              className="svg-inline--fa fa-heartbeat fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"
              ></path>
            </svg>{" "}
            Recovered
          </Typography>
          <Typography variant="h4" className={classes.RecoveredsubText}>
            {recovered}
          </Typography>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h3" className={classes.DeathheadText}>
            <svg
              style={{ width: "25px" }}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="skull-crossbones"
              className="svg-inline--fa fa-skull-crossbones fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"
              ></path>
            </svg>{" "}
            Deceased
          </Typography>
          <Typography variant="h4" className={classes.DeathsubText}>
            {death}
          </Typography>
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default InfoCard;
