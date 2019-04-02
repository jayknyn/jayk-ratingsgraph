import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Graph from './Graph.js';
import GraphPros from './GraphPros.js';
import GraphCons from './GraphCons.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 1.25,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    height: 300
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
            <Graph 
              ratings={props.ratings} 
              ratingAverage={props.ratingAverage} 
              reviews={props.reviews}
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Pros
            </Typography>
            <GraphPros
              pros={props.pros} 
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">
              Cons
            </Typography>
            <GraphCons
              cons={props.cons} 
            />
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