import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import DeleteCustomer from './DeleteCustomer'

class Customer extends Component {
  render() {
    return (
        <TableRow>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><img src={this.props.profilePic} alt="profile" style={{width:64 ,height: 64}}/></TableCell>
          <TableCell>{this.props.name}</TableCell>
          <TableCell>{this.props.major}</TableCell>
          <TableCell>{this.props.studentId}</TableCell>
          <TableCell>{this.props.gender}</TableCell>
          <TableCell><DeleteCustomer stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
        </TableRow>
    );
  }
}

export default Customer;
