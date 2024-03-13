import React, { Component } from "react";
import {Link} from 'react-router-dom'
export class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('Are you sure you want to delete this')){//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var {product, index } = this.props
    var statusName = product.status ? 'In stock' : 'Out Of Stock'
    var statusClass = product.status ? 'primary' : 'secondary'
    return (
      <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  <span className={`badge  badge-${statusClass}`}>
                    {statusName}
                  </span>
                </td>
                <td>
                  <Link
                    to = {`/product/${product.id}/edit`}
                    className="btn btn-success"
                    style={{ marginRight: 10 }}
                   
                  >
                    Edit
                  </Link>
                  <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={() => this.onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
    );
  }
}

export default ProductItem;
