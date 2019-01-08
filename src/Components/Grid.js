import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slideshow from "../Components/Slideshow.js"
import Chart from './Chart';
import Profile from './Profile';
import Typography from '@material-ui/core/Typography';
import TodoInput from "./TodoInput";




const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Slideshow/>
          
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          Analytics
            </Typography>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
           
            </Typography>
            <Typography variant="subheading"  color="inherit" gutterBottom>
            Your point status for last 6 months
        </Typography>
        <br/>
          <Chart/>
          </Paper>
          
        </Grid>
        <Grid item xs={12} sm={6}>
      

        <Profile/>
      
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="h5"  color="inherit" style={{color:"#424242",marginLeft:20,fontWeight:"bold",marginTop:20,}}>
            Todo List
        </Typography>
<TodoInput/>
      

        </Grid>
 

      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);