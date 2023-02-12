import React, { useState } from "react";
import "./index.css";
import {Link,useNavigate} from 'react-router-dom'
function Master() {
  const [assignment, setAssignment] = useState("");
  const [message, setMessage] = useState('');
  const history = useNavigate();
  const handleAssign = (event) => {
    event.preventDefault();
    const newAssinment = { assignment };
    let Assignments = JSON.parse(localStorage.getItem("Assignments")) || [];
    Assignments.push(newAssinment);
    localStorage.setItem("Assignments", JSON.stringify(Assignments));
    localStorage.setItem("presentAss", JSON.stringify(newAssinment));
    setAssignment("");
    setMessage("This Calculation is assigned to Student")
  };

  const onClickLogout = () => {
    history('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/master">
            Master
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li  className="nav-item ml-2">
                <Link  className="nav-Link brand" aria-current="page" to='/master'>
                  Home
                </Link>
              </li>
              <li  className="nav-item ml-4">
                <Link  className="nav-Link brand" aria-current="page" to='/masterCalculations'>
                  Assigned Calculations
                </Link>
              </li>
            </ul>
            <button className="btn btn-outline-success ml-auto my-2 my-sm-0" type="button" onClick={onClickLogout}>Logout</button>
          </div>
        </div>
      </nav>
      <div className="background-container">
        <div className="card-container">
        <h1 className="heading">Give your Assignment Here</h1>
        <p className="para">Please Assign a calculation to your students</p>
        <form onSubmit={handleAssign} className="form">
          <input
          className="input"
            type="text"
            placeholder="Assign Calculation"
            id="assignment"
            value={assignment}
            onChange={(event) => setAssignment(event.target.value)}
          />
          <div className="btn-container">
          <button className="button" type="submit">
            Assign
          </button>
          </div>
          <p className="message">{message}</p>
        </form>
        </div>
      </div>
    </>
  );
}
export default Master;
