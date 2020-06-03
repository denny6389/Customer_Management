import React, { Component } from 'react';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import './App.css';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {

  state = {
    customer: ""
  }
//컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
  componentDidMount() {
    this.callApi()
      .then(response => this.setState({customers: response}))
      .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
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
            </TableRow>
          </TableHead>

          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
                return (<Customer key={c.id} id={c.id} profilePic={c.profilePic} name={c.name}
                        major={c.major} studentId={c.studentId} gender={c.gender}/>)})
            : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
