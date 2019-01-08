import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import AddBtn from "./AddBtn";
import Task from "./Task"
import  '../style.css';
import FlipMove from 'react-flip-move';




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

class TodoInput extends React.Component{
  constructor(props){
    super(props);

    this.state={
        noteText: '',
        note:[]
    }
    this.updateNoteText=this.updateNoteText.bind(this)
    this.addNote=this.addNote.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
    this.deleteNote=this.deleteNote.bind(this)
}
updateNoteText(noteText){
  this.setState({noteText:noteText.target.value})
}

addNote(){
  if(this.state.noteText===''){return false}
  let noteArr = this.state.note;
  noteArr.push(this.state.noteText);
  this.setState({noteText:''});
  this.textInput.focus();
  console.log(noteArr)
}
handleKeyPress = (event) =>{
  if(event.key==='Enter'){
    let noteArr = this.state.note;
  noteArr.push(this.state.noteText);
  this.setState({noteText:''});

  }
}
deleteNote(index){
  let noteArr = this.state.note;
  noteArr.splice(index,1);
  this.setState({notes: noteArr})
  console.log("deleted")
}
 

  render(props){

    let notes= this.state.note.map((val,key) => {
      return <Task key ={key} text={val}
      deleteMehod={()=> this.deleteNote(key)} />
    })
    console.log("Here is my"+notes)
    const { classes } = this.props;
  return (
    
    <div className={classes.root}>

          <Paper className={classes.paper}>
         
          <div id="inputtext">

          <Input

        inputRef ={((input) => {this.textInput = input})}
        value={this.state.noteText}
        onChange={noteText => this.updateNoteText(noteText)}
        onKeyPress={this.handleKeyPress.bind(this)}
        placeholder="Enter your task"
        fullWidth="true"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />          </div>

     
    
   <AddBtn 
    className={classes.Add}
    onClick={this.addNote}
    />
          </Paper>
          <FlipMove duration={500} easing="ease-out">
        {notes}
        </FlipMove>
    </div>
  );
}
}
TodoInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoInput);