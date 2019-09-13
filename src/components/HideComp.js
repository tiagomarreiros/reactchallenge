import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


/* const GreenCheckbox = withStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />); */

export default function HideComp() {
  const [state, setState] = React.useState({
    checkedA: false,
    
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
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