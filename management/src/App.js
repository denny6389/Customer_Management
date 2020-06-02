import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
    {'id': 1,
     'profilePic': 'https://placeimg.com/64/64/1',
     'name': 'Hongjun Kim',
     'major': 'Computer Science',
     'studentId': '260728949',
     'gender': 'Male'},
    {'id': 2,
     'profilePic': 'https://placeimg.com/64/64/2',
     'name': 'Karsa',
     'major': 'Progamer',
     'studentId': '2017492093',
     'gender': 'Male'}
  ]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                profilePic={c.profilePic}
                name={c.name}
                major={c.major}
                studentId={c.studentId}
                gender={c.gender}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
