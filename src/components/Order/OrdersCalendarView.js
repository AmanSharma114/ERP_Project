// // OrdersCalendarView.js
// import React, { Component } from "react";
// import { connect } from 'react-redux';

// class OrdersCalendarView extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedDate: null
//     };
//   }

//   handleDateClick = (date) => {
//     this.setState({ selectedDate: date });
//   };

//   render() {
//     const { orders } = this.props;
//     const { selectedDate } = this.state;

//     if (!orders) {
//       return <div>Loading...</div>; // Placeholder for when orders are loading
//     }

//     // Extract unique delivery dates from orders
//     const deliveryDates = [...new Set(orders.map(order => order.date))];

//     return (
//       <div>
//         <h1>Orders Calendar View</h1>
//         <div className="calendar">
//           {/* Render calendar UI here */}
//           {deliveryDates.map(date => (
//             <div key={date} onClick={() => this.handleDateClick(date)} style={{ cursor: 'pointer', margin: '10px', display: 'inline-block', border: selectedDate === date ? '2px solid blue' : 'none' }}>
//               <h2>{date}</h2>
//             </div>
//           ))}
//         </div>
//         {selectedDate && (
//           <div>
//             <h2>Orders for {selectedDate}</h2>
//             <ul>
//               {orders.filter(order => order.date === selectedDate).map(order => (
//                 <li key={order.id}>
//                   Customer: {order.customer}, Total: ${order.total}, Status: {order.status}, Date: {order.date}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     orders: state.orders // Assuming orders are stored in the Redux state
//   };
// };

// export default connect(mapStateToProps)(OrdersCalendarView);


// OrdersCalendarView.js
import React, { Component } from "react";
import "./OrderCalendarView.css"; // Import CSS file for styling

class OrdersCalendarView extends Component {
  renderCalendarDays() {
    const days = [];
    const numDays = 30; // Total number of days to display
    const startDayOfWeek = 0; // Start day of the week (0 for Sunday, 1 for Monday, etc.)

    for (let i = 1; i <= numDays; i++) {
      days.push(
        <td key={i} className="day">{i}</td>
      );
    }

    // Fill the first row with empty cells until the start day of the week
    for (let i = 0; i < startDayOfWeek; i++) {
      days.unshift(<td key={`empty-${i}`} className="empty-day"></td>);
    }

    // Split days into rows of 7 (one week)
    const rows = [];
    while (days.length > 0) {
      rows.push(<tr key={rows.length}>{days.splice(0, 7)}</tr>);
    }

    return rows;
  }

  render() {
    return (
      <div className="calendar-container">
        <h1>Orders Calendar View</h1>
        <div className="calendar">
          {/* Render calendar UI here */}
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCalendarDays()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default OrdersCalendarView;
