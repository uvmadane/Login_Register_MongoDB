import React from 'react';
import { Table, Container } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data
  const users = [
    { id: 1, name: 'Michael Holz', dateCreated: '04/10/2013', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Paula Wilson', dateCreated: '05/08/2014', role: 'Publisher', status: 'Active' },
    { id: 3, name: 'Antonio Moreno', dateCreated: '11/05/2015', role: 'Publisher', status: 'Suspended' },
    { id: 4, name: 'Mary Saveley', dateCreated: '06/09/2016', role: 'Reviewer', status: 'Active' },
    { id: 5, name: 'Martin Sommer', dateCreated: '12/08/2017', role: 'Moderator', status: 'Inactive' },
  ];

  return (
    <Container className="dashboard-container">
      <h2 className="my-4 text-center">User Dashboard</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Date Created</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.dateCreated}</td>
              <td>{user.role}</td>
              <td>
                <span className={`status-${user.status.toLowerCase()}`}>{user.status}</span>
              </td>
              <td>
                <button className="action-btn settings-btn">&#9881;</button>
                <button className="action-btn delete-btn">&#10060;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Dashboard;
