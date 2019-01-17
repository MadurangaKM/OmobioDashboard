import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import AddBtn from "./AddBtn";
import Task from "./Task";
import "../style.css";
import FlipMove from "react-flip-move";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flex: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    width: "73%",
    float: "left",
    marginRight: 10
  }
});

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      content: ""
    };
  }

  deleteNote(index) {
    console.log(index);

    this.props.deleteTask(index);
  }

  handleChange = e => {
    this.setState({
      id: Math.random(),
      content: e.target.value
    });
  };
  addTodo = e => {
    if(this.state.content===''){return false}
    e.preventDefault();
    console.log(this.state);
    this.props.AddTask(this.state);

    this.setState({ content: "" });
  };
  handleKeyPress = event => {
    if (event.key === "Enter") {
      if(this.state.content===''){return false}
      event.preventDefault();
      this.props.AddTask(this.state);
      this.setState({ content: "" });
    }
  };
  render(props) {
    let tasks = this.props.todos.map(todos => {
      return (
        <Task
          key={todos.id}
          text={todos.content}
          deleteMehod={() => this.deleteNote(todos.id)}
        />
      );
    });
    console.log("Here is my" + tasks);
    console.log(this.props);

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div id="inputtext">
            <Input
              inputRef={input => {
                this.textInput = input;
              }}
              value={this.state.content}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress.bind(this)}
              placeholder="Enter your task"
              fullWidth="true"
              className={classes.input}
              inputProps={{
                "aria-label": "Description"
              }}
            />{" "}
          </div>

          <AddBtn className={classes.Add} onClick={this.addTodo} />
        </Paper>
        <FlipMove duration={500} easing="ease-out">
          {tasks}
        </FlipMove>
      </div>
    );
  }
}
TodoInput.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStatetoProps = state => {
  return {
    todos: state.todos
  };
};

const mapDisparchToProps = dispatch => {
  return {
    deleteTask: id => {
      dispatch({ type: "DELETE_TASK", id: id });
    },
    AddTask: task => {
      console.log("dispatch" + task);
      dispatch({ type: "ADD_TASK", task });
    }
  };
};
export default connect(
  mapStatetoProps,
  mapDisparchToProps
)(withStyles(styles)(TodoInput));
