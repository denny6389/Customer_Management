import React, { Component } from 'react';
import { post } from 'axios';

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      major: '',
      studentId: '',
      gender: '',
      fileName: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addCustomer()
      .then((response) => {
        console.log(response.data);
        this.props.stateRefresh();
      })
    this.setState({
      file: null,
      userName: '',
      major: '',
      studentId: '',
      gender: '',
      fileName: ""
    })
  }

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value
    });
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  addCustomer = (e) => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('profilePic', this.state.file);
    formData.append('name', this.state.userName);
    formData.append('major', this.state.major);
    formData.append('studentId', this.state.studentId);
    formData.append('gender', this.state.gender);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <h1>Add Customer</h1>
        Profile Picture: <input type="file" name="file" file={this.state.file}
                          value={this.state.fileName} onChange={this.handleFileChange}/><br/>
        Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
        Major: <input type="text" name="major" value={this.state.major} onChange={this.handleValueChange}/><br/>
        Student ID: <input type="text" name="studentId" value={this.state.studentId} onChange={this.handleValueChange}/><br/>
        Gender: <input type="gender" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
        <button type="submit">+</button>
      </form>
    )
  }
}

export default AddCustomer;
