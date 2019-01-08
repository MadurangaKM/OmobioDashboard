import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




const styles = theme => ({
  root: {
    flex:1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor:'#FFF1DB'
  
  },
  

 

});

function Task(props) {
  const { classes } = props;


  return (
    
    <div className={classes.root}>

          <Paper className={classes.paper}>
         
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          Task One
            </Typography>

          </Paper>
          

    </div>
  );
}
Task.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Task);