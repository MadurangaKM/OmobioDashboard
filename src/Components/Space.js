import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    flex: 1,
  
  },
  
});


class Space extends React.Component {
  render(props) {
    const { classes } = this.props;

    return (
      <div className={classes.root} style={{
            height:this.props.height
      }}>
      
      </div>
    );
  }
}
Space.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Space);
