import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Slideshow from "../Components/Slideshow.js";
import Chart from "./Chart";
import Profile from "./Profile";
import Typography from "@material-ui/core/Typography";
import TodoInput from "./TodoInput";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import IconButton from "@material-ui/core/IconButton";
const styles = theme => ({
  root: {
    flexGrow: 1,
   
   
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}  >
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
            <Slideshow />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            >
              Analytics
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
            />
            <Typography variant="subheading" color="inherit" gutterBottom>
              Your point status for last 6 months
            </Typography>
            <br />
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Profile />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            color="inherit"
            style={{
              color: "rgb(173, 20, 87)",
              marginLeft: 20,
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            Todo List
          </Typography>
          <TodoInput />
        </Grid>
        <br />

        <Grid
          item
          xs={12}
          sm={6}
          container
          spacing={0}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Typography
            variant="h5"
            color="inherit"
            style={{
              color: "rgb(173, 20, 87)",
              marginLeft: 20,
              fontWeight: "bold",
              marginTop: 20,
              width: "100%"
            }}
          >
            My Leave
          </Typography>

          <Typography
            variant="subheading"
            color="inherit"
            gutterBottom
            style={{ color: "#424242", marginLeft: 20, width: "100%" }}
          >
            Your Leave Balance & Apply For Leave
          </Typography>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}
             style={{
              //background:"linear-gradient(to right bottom, #DA4453, #89216B)",
              background:"linear-gradient(to right bottom, #642B73, #C6426E)"
            }}>
              <Typography
                variant="h3"
                color="#fff"
                style={{ color: "#fff" }}
              >
                6/7
              </Typography>
              <Typography
                variant="subheading"
                color="#fff"
                style={{ color: "#fff" }}
              >
                Casual Leaves
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper} style={{
              //background:"linear-gradient(to right bottom, #ff9966, #ff5e62)"
              background:"linear-gradient(to right bottom, #DA4453, #89216B)",
            }}>
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#fff" }}
              >
                1/7
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Medical Leaves
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}
            style={{
              //background:"linear-gradient(to right bottom, #642B73, #C6426E)"
              background:"linear-gradient(to right bottom, #FF512F, #DD2476)"
            }}>
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#fff" }}
              >
                3/7
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Working from home
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}
            style={{
              background:"linear-gradient(to right bottom, #FF5F6D, #FFC371)"
            }}>
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#fff" }}
              >
                7/7
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Anual Leaves
              </Typography>
            </Paper>
          </Grid>
          <Typography
            variant="h5"
            color="inherit"
            style={{
              color: "rgb(173, 20, 87)",
              marginLeft: 20,
              fontWeight: "bold",
              marginTop: 20,
              width: "100%"
            }}
          >
            Last Day Punch In & Out
          </Typography>
          <Grid item xs={7} sm={4}>
            <Paper className={classes.paper} 
            style={{
              background:"linear-gradient(to right bottom, #642B73, #C6426E)"
            }}>
            
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#ffff" }}
              >
                7.3
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Punch In
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Paper className={classes.paper}
            style={{
              background:"linear-gradient(to right bottom, #FF512F, #DD2476)"
            }}>
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#fff" }}
              >
                5.30
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Punch Out
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={7} sm={4}>
            <Paper className={classes.paper}
             style={{
              background:"linear-gradient(to right bottom, #11998e, rgb(0, 209, 79))"
            }}>
              <Typography
                variant="h3"
                color="inherit"
                style={{ color: "#fff" }}
              >
                10h
              </Typography>
              <Typography
                variant="subheading"
                color="inherit"
                style={{ color: "#fff" }}
              >
                Duration
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            color="inherit"
            style={{
              color: "rgb(173, 20, 87)",
              marginLeft: 20,
              fontWeight: "bold",
              marginTop: 20
            }}
          >
            My Goods
          </Typography>
          <Typography
            variant="subheading"
            color="inherit"
            style={{
              color: "#424242",
              marginLeft: 20,
              marginBottom: 35
            }}
          >
            Keep track your goods
          </Typography>
          <Paper className={classes.paper}
         >
            <Typography
              variant="subheading"
              color="inherit"
              style={{
                textAlign: "left",
                width: "80%",

                float: "left",
                marginTop: 10
              }}
            >
              Macbook Pro
            </Typography>
            <IconButton color="inherit">
              <DeleteOutlinedIcon style={{}} />
            </IconButton>
          </Paper>
          <Paper
            className={classes.paper}
            style={{
              marginTop: 15,
              cursor: "pointer",
                
            
            }}
          >
            <Typography variant="subheading" color="inherit" style={{}}>
              + Add New
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
