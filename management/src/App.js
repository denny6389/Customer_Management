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

const customers = [
    {'id': 1,
     'profilePic': 'https://placeimg.com/64/64/1',
     'name': 'Sam',
     'major': 'Computer Science',
     'studentId': '260728949',
     'gender': 'Male'},
    {'id': 2,
     'profilePic': 'https://placeimg.com/64/64/2',
     'name': 'Tom',
     'major': 'Progamer',
     'studentId': '2017492093',
     'gender': 'Male'}
  ]

class App extends Component {
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
            {customers.map(c => {
                return (
                  <Customer key={c.id} id={c.id} profilePic={c.profilePic} name={c.name}
                    major={c.major} studentId={c.studentId} gender={c.gender}/>
                )})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
