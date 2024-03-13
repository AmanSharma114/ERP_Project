// OrderListPage.js
import React, { Component } from "react";
import OrderForm from "./OrderForm";
// import OrdersCalendarView from "./OrdersCalendarView"; // Import the OrdersCalendarView component
import "./OrderListPage.css";

class OrderListPage extends Component {
  state = {
    orders: [],
    isAdding: false,
    editOrder: null
  };

  componentDidMount() {
    const storedOrders = localStorage.getItem("orders");
    if (storedOrders) {
      this.setState({ orders: JSON.parse(storedOrders) });
    }
  }

  handleAddOrder = () => {
    this.setState({ isAdding: true, editOrder: null });
  };

  handleEditOrder = (order) => {
    this.setState({ isAdding: true, editOrder: order });
  };

  handleDeleteOrder = (orderId) => {
    const updatedOrders = this.state.orders.filter(order => order.id !== orderId);
    this.setState({ orders: updatedOrders });
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  handleCancel = () => {
    this.setState({ isAdding: false, editOrder: null });
  };

  handleSubmit = (orderData) => {
    const { orders, editOrder } = this.state;
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    const updatedOrderData = { ...orderData, date: currentDate }; // Include date in order data
    if (editOrder) {
      // Edit existing order
      const updatedOrders = orders.map((order) =>
        order.id === editOrder.id ? { ...order, ...updatedOrderData } : order
      );
      this.setState({ orders: updatedOrders, isAdding: false, editOrder: null });
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    } else {
      // Add new order
      const newOrder = { id: orders.length + 1, ...updatedOrderData };
      const updatedOrders = [...orders, newOrder];
      this.setState({ orders: updatedOrders, isAdding: false });
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
    }
  };

  render() {
    const { orders, isAdding, editOrder } = this.state;

    return (
      <div className="order-list-container">
        <h1>Order Management</h1>
        <button className="add-order-button" onClick={this.handleAddOrder}>
          Add Order
        </button>
        {isAdding && (
          <div className="form-container">
            <h2>{editOrder ? "Edit Order" : "Add New Order"}</h2>
            <OrderForm
              onSubmit={this.handleSubmit}
              onCancel={this.handleCancel}
              order={editOrder}
            />
          </div>
        )}
        {/* Render calendar view */}
        {/* <OrdersCalendarView orders={orders} /> */}
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>{order.status}</td>
                <td>{order.date}</td> {/* Display date */}
                <td>
                  <button className="edit-button" onClick={() => this.handleEditOrder(order)}>
                    Edit
                  </button>
                  <button className="edit-button" onClick={() => this.handleDeleteOrder(order.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderListPage;
