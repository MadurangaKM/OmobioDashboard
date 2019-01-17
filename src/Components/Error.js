import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import History from "./History";

const styles = theme => ({
  root: {
    backgroundColor:'#ffd5d5ff',
    flex:1,
    height: "100vh",
    
  },
  imageContainer:{
    marginTop: 50,
  },
  button:{
    marginTop: 10,
  }
});


class Error extends Component {
  handleOnClick = () => {
    //History.push("/Dashboard");
    const url = '/Dashboard';
  window.open(url, '_self');
  }
  
    render() {
      const { classes } = this.props;

      return (
        <div  className={classes.root} >
        <Grid  container
  direction="column"
  justify="center"
  alignItems="center">
        <div className="imageContainer" style={{marginTop: 80,}}>
          <img src={require("../images/errorImage.png")} alt="slideone" style={{width: '50vh', height: '26vh'}} />
        </div>
        <Button variant="contained" color="secondary" className={classes.button}  type="submit" 
              onClick={this.handleOnClick}>
        Go Back
      </Button>
            </Grid>
        </div>
       
      );
    }
  }
  export default withStyles(styles)(Error);
