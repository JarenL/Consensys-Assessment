import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DataList from './Components/DataList';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: 45,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      checkedA: true,
      checkedB: true
    }
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  // Fetches GET route from the Express server.
  callBackendAPI = async () => {
    const response = await fetch('/consensys');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    this.setState({
      data: body.data
    })
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    if (this.state.data !== []) {
      return (
        <div className={classes.root}>
          <div>
            <AppBar position="absolute" className={classes.appBar}>
              <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                  Consensys Assessment
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
          <main className={classes.content}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                  />
                }
                label="Men"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Women"
              />
            </FormGroup>
            <DataList data={this.state.data} checkedA={this.state.checkedA} checkedB={this.state.checkedB}/>
          </main>
        </div>
      )
    }
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
