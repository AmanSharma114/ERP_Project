import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class HomePage extends Component {
  render() {
    const { totalProducts } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.dashboard}>
          <h1 style={styles.heading}>Welcome to Your Dashboard</h1>
          <div style={styles.summary}>
            <div style={styles.metric}>
              <h3>Total Products</h3>
              <p style={styles.metricValue}>{totalProducts}</p>
            </div>
          </div>
          <div style={styles.navigation}>
            <Link to="/product-list" style={styles.button}>
              Manage Products
            </Link>
            <Link to="/order-list" style={{ ...styles.button, marginLeft: '20px' }}>
              Manage Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    totalProducts: state.products.length,
    totalOrders: state.orders ? state.orders.length : 0 // Check if orders property exists
  };
};


export default connect(mapStateToProps)(HomePage);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  dashboard: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  summary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: '30px',
  },
  metric: {
    margin: '10px 20px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '20px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    flex: '1 1 250px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  metricValue: {
    fontSize: '36px',
    margin: '10px 0',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '15px 30px',
    fontSize: '18px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};
