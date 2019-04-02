import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Graph from './Graph.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1.25,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

const CenteredGrid = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Ratings Summary
            </Typography>
            <Graph ratings={props.ratings} ratingAverage={props.ratingAverage} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Pros
            </Typography>
            <Typography>
              <ul>
                <li>Cutting wood</li>
                <li>Throwing</li>
                <li>Battle</li>
                <li>Grand standing</li>
                <li>Scraping dead skin</li>
            </ul>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Cons
            </Typography>
            <Typography>
              <ul>
                <li>Baby shower gift</li>
                <li>Gardening</li>
                <li>Fightin zombies</li>
                <li>Unbalanced</li>
                <li>Not organic</li>
            </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);