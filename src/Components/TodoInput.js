import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import AddBtn from "./AddBtn";
import  '../style.css';




const styles = theme => ({
  root: {
    flex:1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  
  },
  input:{
      width:'73%',
      float:'left',
      marginRight:10
  },

 

});

function TodoInput(props) {
  const { classes } = props;


  return (
    
    <div className={classes.root}>

          <Paper className={classes.paper}>
         
          <div id="inputtext">

          <Input
        placeholder="Enter your task"
        fullWidth="true"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />          </div>

     
    
   <AddBtn className={classes.Add}/>
          </Paper>
          

    </div>
  );
}
TodoInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoInput);