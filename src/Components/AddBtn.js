import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {

  


    },
    fab: {

    },
    extendedIcon: {
    },
  
  });
  function AddBtn(props) {
    const { classes } = props;
  
  
    return (
      
      <div className={classes.root}>
       
        <Fab color="secondary" aria-label="Add" className={classes.fab} onClick= {props.onClick}>
          <AddIcon />
        </Fab>
     
         
      </div>
    );
  }
AddBtn.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AddBtn);