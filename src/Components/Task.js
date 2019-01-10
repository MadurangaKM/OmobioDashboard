import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  root: {
    flex: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    background:"linear-gradient(to right bottom, #FFD494, #FFC371)"
   
  }
});


class Task extends React.Component {
  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root} onClick={this.props.deleteMehod}
      style={{
        cursor: "pointer",
        
      }}>
      
        <Paper className={classes.paper}>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
         
          >
            {this.props.text}
          </Typography>
        </Paper>
       
      </div>
    );
  }
}
Task.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Task);
