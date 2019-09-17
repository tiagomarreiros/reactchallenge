import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/actionCreators';
import HideComp from '../components/HideComp';

class HideCompContainer extends React.Component{

 render(){
    return (
        <HideComp 
            setVisibilityFilter={this.props.setVisibilityFilter}
        />
      );
 }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(HideCompContainer)