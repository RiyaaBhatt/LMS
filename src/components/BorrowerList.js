import React, { useState } from 'react';
import Header from './Header'
import './BorrowList.css'

const staticBorrowersData = [
  {
    id: 1,
    user_id: 101,
    book_id: 202,
    borrowed_at: '2023-06-01',
    due_date: '2023-06-15',
    returned_at: null,
    late_fee: 0.0,
  },
  {
    id: 2,
    user_id: 102,
    book_id: 203,
    borrowed_at: '2023-06-05',
    due_date: '2023-06-20',
    returned_at: null,
    late_fee: 0.0,
  },
  {
    id: 3,
    user_id: 103,
    book_id: 204,
    borrowed_at: '2023-06-10',
    due_date: '2023-06-25',
    returned_at: null,
    late_fee: 0.0,
  },
];

const BorrowerList = () => {
  const [borrowers, setBorrowers] = useState(staticBorrowersData);

  const generateReport = (borrower, action) => {
    const reportContent = `
    
      ID: ${borrower.id}
      User ID: ${borrower.user_id}
      Book ID: ${borrower.book_id}
      Borrowed At: ${borrower.borrowed_at}
      Due Date: ${borrower.due_date}
      Returned At: ${borrower.returned_at ? borrower.returned_at : 'Not Returned'}
      Late Fee: $${borrower.late_fee.toFixed(2)}
      Action: ${action}
    `;
    console.log(`Report for Borrower ID ${borrower.id}:\n`, reportContent);

   
    const element = document.createElement('a');
    const file = new Blob([reportContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `report_borrower_${borrower.id}.txt`;
    document.body.appendChild(element);
    element.click();
  };

  const acceptRequest = (id) => {
    const borrower = borrowers.find((b) => b.id === id);
    if (borrower) {
      generateReport(borrower, 'Accepted');
      setBorrowers(borrowers.filter((b) => b.id !== id));
    }
  };

  const cancelRequest = (id) => {
    const borrower = borrowers.find((b) => b.id === id);
    if (borrower) {
      generateReport(borrower, 'Cancelled');
      setBorrowers(borrowers.filter((b) => b.id !== id));
    }
  };

  const chargeLateFee = (id) => {
    const updatedBorrowers = borrowers.map((borrower) => {
      if (borrower.id === id) {
        const dueDate = new Date(borrower.due_date);
        const today = new Date();
        const lateDays = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24));
        const lateFee = lateDays > 0 ? lateDays * 1.0 : 0.0; 
        return { ...borrower, late_fee: lateFee };
      }
      return borrower;
    });
    setBorrowers(updatedBorrowers);
  };

  return (
      <div>
          <Header/>
      <h1>Borrower List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Borrowed At</th>
            <th>Due Date</th>
            <th>Returned At</th>
            <th>Late Fee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {borrowers.map((borrower) => (
            <tr key={borrower.id}>
              <td>{borrower.id}</td>
              <td>{borrower.user_id}</td>
              <td>{borrower.book_id}</td>
              <td>{borrower.borrowed_at}</td>
              <td>{borrower.due_date}</td>
              <td>{borrower.returned_at ? borrower.returned_at : 'Not Returned'}</td>
              <td>${borrower.late_fee.toFixed(2)}</td>
              <td>
                <button onClick={() => acceptRequest(borrower.id)}>Accept</button>
                <button onClick={() => cancelRequest(borrower.id)}>Cancel</button>
                <button onClick={() => chargeLateFee(borrower.id)}>Charge Late Fee</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowerList;
