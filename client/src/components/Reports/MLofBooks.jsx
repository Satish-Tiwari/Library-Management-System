import React, { useContext } from "react";
import "./MLofBooks.css";

import createReportsContext from "../../context/reports/createReportsContext";

// const data = [
//   {
//     serialNo: 1,
//     bookName: "To Kill a Mockingbird",
//     authorName: "Harper Lee",
//     category: "Fiction",
//     status: "Available",
//     cost: 10.99,
//     procurementDate: "2022-01-01",
//   },
//   {
//     serialNo: 2,
//     bookName: "1984",
//     authorName: "George Orwell",
//     category: "Science Fiction",
//     status: "Checked Out",
//     cost: 12.99,
//     procurementDate: "2022-02-15",
//   },
//   {
//     serialNo: 3,
//     bookName: "The Great Gatsby",
//     authorName: "F. Scott Fitzgerald",
//     category: "Fiction",
//     status: "Available",
//     cost: 9.99,
//     procurementDate: "2022-03-20",
//   },
//   {
//     serialNo: 4,
//     bookName: "Pride and Prejudice",
//     authorName: "Jane Austen",
//     category: "Romance",
//     status: "Available",
//     cost: 8.99,
//     procurementDate: "2022-04-30",
//   },
// ];

const MLofBooks = () => {
  const { mlOfBooks, books, total, booksLoading } = useContext(createReportsContext);
  // console.log(books);
  // console.log(mlOfBooks);
  // console.log(booksLoading);
  // console.log(books);
  // console.log("hello ------------------");
  // console.log(total);
  // const [bookData, setBookData] = useState(data);

  /*  const bookData = data;
  
    const renderTableData = () => {
      return bookData.map((book, index) => {
        const {
          serialNo,
          bookName,
          authorName,
          category,
          status,
          cost,
          procurementDate,
        } = book;
        return (
          <tr key={serialNo}>
            <td>{serialNo}</td>
            <td>{bookName}</td>
            <td>{authorName}</td>
            <td>{category}</td>
            <td>{status}</td>
            <td>{cost}</td>
            <td>{procurementDate}</td>
          </tr>
        );
      });
    };
        */


  const renderTableData = () => {
    return books.map((book, index) => {
      const {
        serialNo,
        bookMovieName,
        authorName,
        category,
        status,
        cost,
        procurementDate
      } = book;
      return (
        <tr key={serialNo}>
          <td>{index+1}</td>
          <td>{serialNo}</td>
          <td>{bookMovieName}</td>
          <td>{authorName}</td>
          <td>{category}</td>
          <td>{status}</td>
          <td>{cost}</td>
          <td>{procurementDate}</td>
        </tr>
      );
    });
  };


  return (
    <div className="table-container">
      <h1 className="table-title">Master List of Books</h1>
      <table className="book-table">
        <thead>
          <tr>
            <th>Ind No</th>
            <th>Serial No</th>
            <th>Name of Book</th>
            <th>Author Name</th>
            <th>Category</th>
            <th>Status</th>
            <th>Cost</th>
            <th>Procurement Date</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>
    </div>
  );
};

export default MLofBooks;
