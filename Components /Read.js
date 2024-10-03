
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // import Bootstrap JS (optional)
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  // Fetch data from API
  function getData() {
    axios
      .get("https://66bcb6ca24da2de7ff6b99ba.mockapi.io/crudyoutube")
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  //Handle Delete Operation
  const handleDelete = (id) => {
    axios
      .delete(`https://66bcb6ca24da2de7ff6b99ba.mockapi.io/crudyoutube/${id}`)
      .then(() => {
        getData(); // Refresh data after delete
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => {
            return (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
