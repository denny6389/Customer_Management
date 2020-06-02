import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
      <div>
        <CustomerProfile
          id={this.props.id}
          profilePic={this.props.profilePic}
          name={this.props.name}/>
        <CustomerInfo
          major={this.props.major}
          studentId={this.props.studentId}
          gender={this.props.gender}/>
      </div>
    );
  }
}

class CustomerInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.major}</p>
        <p>{this.props.studentId}</p>
        <p>{this.props.gender}</p>
      </div>
    )
  }
}

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.profilePic}
          alt="profile"/ >
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export default Customer;
