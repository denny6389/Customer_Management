import React, { createRef, Component } from 'react';
import Customer from './components/Customer'
import AddCustomer from './components/AddCustomer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    marginTop: theme.spacing(2),
  }
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  }

  wrapper = createRef();

  stateRefresh = () => {
    this.setState({
      customers: '',
      completed: 0
    });
    this.callApi()
      .then(response => this.setState({customers: response}))
      .catch(err => console.log(err));
  }

//컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(response => this.setState({customers: response}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed+1});
  }

  render() {
    const { classes } = this.props;
    return (
      <div ref={this.wrapper}>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Profile Pic</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Major</TableCell>
                <TableCell>Student Id</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Setting</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.state.customers ? this.state.customers.map(c => {
                  return (<Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} profilePic={c.profilePic} name={c.name}
                          major={c.major} studentId={c.studentId} gender={c.gender}/>)})
              : <TableRow>
                  <TableCell colSpan='6' align='center'>
                    <CircularProgress className={classes.progress} variant='determinate' value={this.state.completed}/>
                  </TableCell>
                </TableRow>}
            </TableBody>
          </Table>
        </Paper>
        <AddCustomer stateRefresh={this.stateRefresh}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
