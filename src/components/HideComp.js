import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function HideComp(props) {
  const [state, setState] = React.useState({
    checkedA: false,
    
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    if(state.checkedA === false){
      props.setVisibilityFilter('SHOW_COMPLETED')
    }
    if(state.checkedA === true){
      props.setVisibilityFilter('SHOW_ALL')
    }
  };

  return (
    <FormGroup row>
      <FormControlLabel
        label="Hide completed"
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA"/>
        }
        
      />
    </FormGroup>
  );
}


export default HideComp