import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/styleComps';


class TaskItem extends React.Component{

    render(){
        const { key, taskId, taskCompleted, taskName, toggleTask, handleClickOpen, deleteTask, editTask, classes} = this.props;
        return(
            <ListItem key={key} role={undefined} dense button onClick={() => toggleTask(taskId, !taskCompleted)} >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={taskCompleted}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': key }}
                />
              </ListItemIcon>
              <ListItemText id={key} primary={taskName} />
              <ListItemSecondaryAction>
                  <Button variant="contained" color="primary" className={classes.button} onClick={() => {                   
                    editTask(taskId, taskName)
                    handleClickOpen()
                    }}>
                      Edit
                      <EditIcon className={classes.rightIcon} />
                  </Button>
                  <Button variant="contained" color="secondary" className={classes.button} onClick={ () => deleteTask(taskId)}>
                      Delete
                      <DeleteIcon className={classes.rightIcon} />
                  </Button>
              </ListItemSecondaryAction>
            </ListItem>
            
        );
    }

    
  
          
}

export default withStyles(styles)(TaskItem);