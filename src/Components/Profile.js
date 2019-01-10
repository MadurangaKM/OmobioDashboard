import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  
  },
  paperTwo: {
    
    color: theme.palette.text.secondary,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
  
  },
});

function Profile(props) {
  const { classes } = props;
  let today = new Date()
let curHr = today.getHours()
let wish;

if (curHr < 12) {
   wish = "Good Morning!"
} else if (curHr < 18) {
  wish = "Good Afternoon!"
  
} else {
  wish = "Good Evening!"
}


  return (
    
    <div className={classes.root}>
     
          <Paper className={classes.paper}>
          <div style={{float:"left",marginRight:20,marginTop:10}}>
            <img src={ require('../images/profile.jpg') }  alt="slideone" style={{height:100,width:100,borderRadius:100}}/>
            </div>
          <div  style={{marginBottom:20}}>
          <Typography className={classes.title} variant="subheading" color="inherit" noWrap>
         {wish} 
            </Typography>
            <Typography className={classes.title} variant="subheading"  noWrap style={{color:"#424242"}}>
          Maduranga Kodithuwakku
            </Typography>
            <Typography className={classes.title} variant="subheading"  noWrap style={{color:"#424242",height:30,marginTop:5}}>
             Points <h1 style={{color:"rgb(173, 20, 87)",float:"left",marginRight:3}}> 13000</h1>
            </Typography>
            <Progress
  percent={70}

  status="errorr"
  theme={{
    errorr: {
    
      color: "rgb(245, 68, 67)"
    }
  }}
/>

            <Typography className={classes.title} variant="subheading"  noWrap style={{color:"#424242"}}>
            120 Points need for next level 
            </Typography>
            
           
            </div>
            <Typography className={classes.title} variant="h8"  noWrap style={{color:"#424242",marginLeft:10,fontWeight:"bold"}}>
            Next Evalution Date:  2018 July 31 
            </Typography>
            

          </Paper>
          <ExpansionPanel  className={classes.paperTwo}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title} variant="h8"  noWrap style={{color:"#424242",fontWeight:"bold"}}>Standards to Maintain Level 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>
  <li>Daily JIRA Timelog</li>
  <li>180 Days Without Warning</li>
  <li>Recruit A Friend</li>
  <li>Earn 120 Points</li>
</ul> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.paperTwo}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.title} variant="h8"  noWrap style={{color:"#424242",fontWeight:"bold"}}>Next Level Requirements</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>
  <li>Daily JIRA Timelog</li>
  <li>180 Days Without Warning</li>
  <li>Recruit A Friend</li>
  <li>Earn 120 Points</li>
</ul> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);