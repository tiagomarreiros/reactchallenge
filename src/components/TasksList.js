import React from 'react';
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import List from '@material-ui/core/List';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import { VisibilityFilters } from '../redux/actions/actionCreators';
import { sortFilters } from '../redux/actions/actionCreators';
import TaskItem from './TaskItem';


const getVisibilityFilter = (state) => state.visibilityFilter
const getTasks = (state) => state.tasks
const getSortFilter = (state) => state.sortFilter

const getVisibleTasks = createSelector(
  [ getVisibilityFilter, getTasks ],
  (visibilityFilter, tasks) => {
    switch (visibilityFilter) {
      case VisibilityFilters.SHOW_ALL:
        return tasks
      case VisibilityFilters.SHOW_COMPLETED:
        return {tasks: tasks.tasks.filter(tasks => !tasks.completed)}
      default:
        throw new Error('Unknown filter: ' + getVisibilityFilter)
      
    }
  }
)

const getSortList = createSelector(
  [getSortFilter, getTasks],
  (sortFilter, tasks) => {
    console.log('soooort',sortFilters)
    switch(sortFilter){
      case sortFilters.SORT_ID:
        return {
          tasks: tasks.tasks.sort((a, b) => 
                                  (a.id < b.id) ? 1 : -1
                                  )}
        
      case sortFilters.SORT_ASC:
        console.log('SORT ASC CASE')
        return { 
          tasks: tasks.tasks.sort((a, b) => 
                                  (a.name > b.name) ? 1 : -1
                                  )}
      case sortFilters.SORT_DESC:
        return { 
          tasks: tasks.tasks.sort((a, b) => 
                              (a.name > b.name) ? 1 : -1).reverse()
                            }    
       default:
          throw new Error('Unknown filter: ' + getSortFilter)
    }
  }
) 

const styles = theme => ({
  
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});

class TasksList extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      open: false,
      setOpen: false,
      text: '',
      id: '',
      count: 0
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  
  handleClickOpen() {
    this.setState({setOpen: true})
  }

  handleClose() {
    this.setState({setOpen: false})
  }
  componentDidUpdate(){
    if(this.state.count === 3) 
      this.setState({count: 0})
      
    console.log('this.props.tasks.edit',this.props.tasks.edit)   
  }
  
  render(){
    const { tasks, classes } = this.props
    console.log('sortFilters', sortFilters.SORT_ID)
    console.log('list props', this.props)
    console.log('list state', this.state)
    return (
      <List className={classes.root}
          subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Button className={classes.button} 
                  onClick={() => {
                        this.props.setSortList(this.state.count === 0 ? 'SORT_ASC' : this.state.count === 1 ? 'SORT_DESC' : this.state.count === 2 ? 'SORT_ID' : null) 
                        this.setState({ count: this.state.count+1})                       
                        }} >
                  Tasks
                </Button>
              </ListSubheader>
          }
      >
        
          {
            tasks.tasks.map( (task, index) => (

              <TaskItem 
                key={index} 
                toggleTask={this.props.toggleTask} 
                handleClickOpen={this.handleClickOpen}
                taskId={task.id}
                taskCompleted={task.completed}
                taskName={task.name}
                deleteTask={this.props.deleteTask}
                editTask={this.props.editTask}
                />
                ))}
                     
              <Dialog open={this.state.setOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Update</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label='Edit'
                        type="text"
                        value={this.state.text}
                        onChange={e => this.setState({ text: e.target.value})}
                        fullWidth
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => {
                        this.props.updateTask(tasks.edit.id, this.state.text)
                        this.setState({text: ''})
                        this.handleClose()
                      }} color="primary">
                        Update
                      </Button>
                    </DialogActions>
                  </Dialog>
      </List>
      );

  }
  
}
const mapStateToProps = state => ({
  // tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  tasks: getVisibleTasks(state),
  tasksSorted: getSortList(state)
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TasksList))
   