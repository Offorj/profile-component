import React, { useState, useEffect } from 'react';
import './App.css';

// Sample user data
const users = [
  {
    name: 'Offor John',
    bio: 'Web Developer',
    dateOfBirth: '2000-04-23'
  },
  {
    name: 'Jane Smith',
    bio: 'Software Engineer',
    dateOfBirth: '1997-02-15'
  },
  {
    name: 'Mary Brooks',
    bio: 'Data Scientist',
    dateOfBirth: '20027-06-10'
  }
];

function UserDetails({ user }) {
  return (
    <div className="user-details">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>Date of Birth: {user.dateOfBirth}</p>
    </div>
  );
}

function Profile({ users }) {
  const [profileUsers, setProfileUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching users from an API
    setTimeout(() => {
      setProfileUsers(users);
    }, 1000); // Delay simulating network request
  }, []);

  return (
    <div className="profile">
      {profileUsers.map((user) => (
        <UserDetails key={user.name} user={user} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile users={users} />
      </header>
    </div>
  );
}

export default App;
