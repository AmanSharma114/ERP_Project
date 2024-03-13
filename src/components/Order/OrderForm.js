// OrderForm.js
import React, { Component } from "react";
import "./OrderForm.css"; // Import the CSS file for styling

class OrderForm extends Component {
  state = {
    customer: this.props.order ? this.props.order.customer : "",
    total: this.props.order ? this.props.order.total : "",
    status: this.props.order ? this.props.order.status : "",
    date: this.props.order ? this.props.order.date : "" // Add date field to state
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { customer, total, status} = this.state; // Extract date from state
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className="order-form">
        <h2 className="form-title">{this.props.order ? "Edit Order" : "Add New Order"}</h2>
        <div className="form-group">
          <label className="form-label">Customer:</label>
          <input
            type="text"
            name="customer"
            value={customer}
            onChange={this.handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Total:</label>
          <input
            type="number"
            name="total"
            value={total}
            onChange={this.handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Status:</label>
          <input
            type="text"
            name="status"
            value={status}
            onChange={this.handleChange}
            className="form-input"
          />
        </div>
        {/* <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
            className="form-input"
          />
        </div> */}
        <div className="button-container">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default OrderForm;
