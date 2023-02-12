import React from 'react'
import AssCard from '../AssCard';
import './index.css';

import {Link,useNavigate} from 'react-router-dom'
function StudentCalculations() {
    const history = useNavigate();
    const onClickLogout = () => {
        history('/login')
      }
      let Assignments = JSON.parse(localStorage.getItem("Assignments"))
      // console.log(Assignments)
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/student">
            Student
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
                <Link  className="nav-Link brand" aria-current="page" to='/student'>
                  Home
                </Link>
              </li>
              <li  className="nav-item ml-4">
                <Link  className="nav-Link brand" aria-current="page" to='/studentCalculations'>
                  Assigned Calculations
                </Link>
              </li>
            </ul>
            <button className="btn btn-outline-success ml-auto my-2 my-sm-0" type="button" onClick={onClickLogout}>Logout</button>
          </div>
        </div>
      </nav>
        <div className='background'>
        {Assignments.map(Assignment => <AssCard  item={Assignment.assignment} />)}
        </div>
        </>
    )
}

export default StudentCalculations