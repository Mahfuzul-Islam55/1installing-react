import { CardContent, Grid, Typography,Card } from '@material-ui/core';
import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} duration={2} separation=","></CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="body2">Number of active cases of covid 19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recoverd</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} duration={2} separation=","></CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="body2">Number of recoverd case of covid 19.</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xm={12} md={3}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2} separation=","></CountUp></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="body2">Number of deaths of covid 19.</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
};

export default Cards;