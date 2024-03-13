import React, { Component } from "react";


export class ProductList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header" style={{ backgroundColor: "#39CCCC" }}>
          <h3 className="card-title ">Product List</h3>
        </div>
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>No.</th>
                <th>Item Code</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
