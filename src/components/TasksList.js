import React from 'react';
import { connect } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

// import IconButton from '@material-ui/core/IconButton';
// import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';

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
      id: ''
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
 
  render(){
    const { tasks, classes } = this.props

    console.log('list props', this.props)
    console.log('list state', this.state)
    return (
      <List className={classes.root}
          subheader={
              <ListSubheader component="div" id="nested-list-subheader">
              <Button className={classes.button}>Tasks</Button>
              </ListSubheader>
          }
      >
        
          {
            tasks.tasks.map( (task, index) => (
          
              <ListItem key={index} role={undefined} dense button onClick={() => this.props.toggleTask(task.id)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': index }}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={task.name} />
              <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                    this.handleClickOpen()
                    this.setState({text: task.name, id: task.id})
                    }}>
                      Edit
                      <EditIcon className={classes.rightIcon} />
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.button} onClick={ () => this.props.deleteTask(task.id)}>
                      Delete
                      <DeleteIcon className={classes.rightIcon} />
                  </Button>
              </ListItemSecondaryAction>
            </ListItem>
  
          )          
          
        )}
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
                      <Button onClick={() => this.handleClose()} color="primary">
                        Update
                      </Button>
                    </DialogActions>
                  </Dialog>
      </List>
      );

  }
  
}
const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TasksList))