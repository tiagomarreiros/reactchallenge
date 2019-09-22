
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 450,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
      progress: {
        margin: theme.spacing(2),
      },
  });

  export default styles;