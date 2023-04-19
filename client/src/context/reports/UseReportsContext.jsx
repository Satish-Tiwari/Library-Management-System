import React, { useState, useEffect } from "react";
import createReportsContext from "./createReportsContext";

function UseReportsContext(props) {
  const url = 'http://localhost:5000';

  /*-------------------- Reports -------------------------*/

  /* Master List of Books */
  const [books, setBooks] = useState([]);
  const [total, setTotal] = useState(0);
  const [booksLoading, setBooksLoading] = useState(true);

  const mlOfBooks = async () => {
    try {
      const response = await fetch(`${url}/mlOfBooks`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'userToken': localStorage.getItem("token")
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const JSON = await response.json();
      if (JSON.success === true) {
        setBooks(JSON.books);
        setTotal(JSON.total);
        setBooksLoading(false);
      }
    } catch (error) {
      console.error('Error occurred while fetching data from API:', error);
    }
  };

  useEffect(() => {
    mlOfBooks();
  }, []);

  /* Master List of Movies */
  const [movie, setMovie] = useState([]);
  const [movieLoading, setMovieLoading] = useState(true);

  const mlOfMovies = async ()=>{
    try{
      const res = await fetch(`${url}/mlOfMovies`,{
        method:'GET',
        headers:{
          'content-type':'application/json',
          'userToken':localStorage.getItem('token')
        }
      });
      if(!res.ok)
      {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      if(json.success === true)
      {
        setMovie(json.movies);
        setMovieLoading(false);
      }
    }
    catch(err)
    {
      console.error('Error occurred while fetching data from API:', err);
    }
  };
  useEffect(()=>{
    mlOfMovies();
  },[])


  return (
    <createReportsContext.Provider
      value={{
        mlOfBooks,
        books,
        total,
        booksLoading,

        mlOfMovies,
        movie,
        movieLoading
      }}
    >
      {props.children}
    </createReportsContext.Provider>
  );
}

export default UseReportsContext;
