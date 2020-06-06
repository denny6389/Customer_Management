import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';


class DeleteCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }


  deleteCustomer(id){
    const url = '/api/customers/' + id;
    //DELETE method로 해당 경로에 접속
    fetch(url, {
      method: 'DELETE'
    });
    this.props.stateRefresh();
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
        Delete
        </Button>
        <Dialog onClose={this.handleClose} open={this.state.open}>
          <DialogTitle onClose={this.handleClose}>
          Warning: Delete
          </DialogTitle>
          <DialogContent>
            <Typography gutterBottom>
            The selected customer information will be deleted.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</Button>
            <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>

      // <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>Delete</button>
    )
  }
}

export default DeleteCustomer;
