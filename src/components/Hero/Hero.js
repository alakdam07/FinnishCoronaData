import React, { useState, useEffect } from "react";
import Victim from "../VictimCard/Victim";
import HeroCard from "../HeroCard/HeroCard";
import InfoCard from "../InfoCard/InfoCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";
import moment from "moment";

let themes = createMuiTheme();
themes = responsiveFontSizes(themes);
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  section: {
    paddingBottom: "30px"
  },

  headLine: {
    paddingBottom: "10px"
  }
}));

function Hero() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [state, setstate] = useState({
    confirmed: [],
    recovered: [],
    death: [],
    totalConfirmed: "",
    totalRecovered: "",
    totalDeath: ""
  });

  useEffect(() => {
    coronaData();
  }, []);
  const coronaData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData"
      );
      const data = await response.json();
      console.log(data);
      setstate({
        confirmed: data.confirmed,
        recovered: data.recovered,
        death: data.deaths,
        totalConfirmed: data.confirmed.length,
        totalRecovered: data.recovered.length,
        totalDeath: data.deaths.length
      });
    } catch (error) {
      console.log(error, "FAILED TO FETCH");
    }
    setLoading(false);
  };

  //show the herocard based on latest date
  const confirmList = state.confirmed.reduce((acc, data) => {
    acc[data.id] = {
      date: moment(data.date),
      districts: data.healthCareDistrict,
      source: data.infectionSourceCountry
    };
    return acc;
  }, {});
  const sortedByStartDate = Object.keys(confirmList);
  sortedByStartDate.sort((a, b) => confirmList[b].date - confirmList[a].date);

  //show the VictimCard based on latest date
  const victimList = state.death.reduce((acc, data) => {
    acc[data.id] = {
      date: moment(data.date),
      districts: data.healthCareDistrict
    };
    return acc;
  }, {});
  const sortedBytDate = Object.keys(victimList);
  sortedBytDate.sort((a, b) => victimList[b].date - victimList[a].date);

  return (
    <>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <React.Fragment>
          <MuiThemeProvider theme={themes}>
            <section className={classes.section}>
              <InfoCard
                confirmed={state.totalConfirmed}
                recovered={state.totalRecovered}
                death={state.totalDeath}
              />
            </section>
            <section className={classes.section}>
              <Typography variant="h3" className={classes.headLine}>
                Deceased:
              </Typography>
              <Grid className={classes.medias} container spacing={3}>
                {sortedBytDate.map((list, index) => (
                  <Grid key={index} item sm={4}>
                    <Victim
                      districts={victimList[list].districts}
                      date={victimList[list].date}
                      source={victimList[list].source}
                    />
                  </Grid>
                ))}
              </Grid>
            </section>
            <section className={classes.section}>
              <Typography variant="h3" className={classes.headLine}>
                Confirmed Coronavirus cases in Finland:
              </Typography>
              <Grid className={classes.medias} container spacing={3}>
                {sortedByStartDate.map((list, index) => (
                  <Grid key={index} item sm={4}>
                    <HeroCard
                      districts={confirmList[list].districts}
                      date={confirmList[list].date}
                      source={confirmList[list].source}
                    />
                  </Grid>
                ))}
              </Grid>
            </section>
            <section className={classes.section}>
              {state.recovered.map(list => {
                return (
                  <div key={list.id}>
                    <HeroCard recovered={list.healthCareDistrict} />;
                  </div>
                );
              })}
            </section>
          </MuiThemeProvider>
        </React.Fragment>
      )}
    </>
  );
}

export default Hero;
