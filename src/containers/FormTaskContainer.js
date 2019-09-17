import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import FormTask from '../components/FormTask';

  class FormTaskContainer extends React.Component {
   
    render(){
        return (
         <FormTask 
            addTask={this.props.addTask}
            edit={this.props.edit}
         />
        );
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
  }

  const mapStateToProps = state => ({
    edit: state.tasks.edit
  })

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormTaskContainer)