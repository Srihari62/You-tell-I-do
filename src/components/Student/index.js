import React,{useState} from 'react';
import './index.css';
import {Link,useNavigate} from 'react-router-dom'

function Student() {
  const presentAss = JSON.parse(localStorage.getItem("presentAss"))
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const history = useNavigate();
  
 
  
  const convertToInt=(STRING) => {
    if (STRING === "zero" || STRING === "Zero") {
        return 0
    }
    if (STRING === "one" || STRING === "One") {
        return 1
    }
    if (STRING === "two" || STRING === "Two") {
        return 2
    }
    if (STRING === "three" || STRING === "Three") {
        return 3
    }
    if (STRING === "four" || STRING === "Four") {
        return 4
    }
    if (STRING === "five" || STRING === "Five") {
        return 5
    }
    if (STRING === "six" || STRING === "Six") {
        return 6
    }
    if (STRING === "seven" || STRING === "Seven") {
        return 7
    }
    if (STRING === "eight" || STRING === "Eight") {
        return 8
    }
    if (STRING === "nine" || STRING === "Nine") {
        return 7
    }
    if (STRING === "plus" || STRING === "Plus") {
        return "+"
    }
    if (STRING === "times" || STRING === "Times") {
        return "*"
    }
    if (STRING === "minus" || STRING === "Minus") {
        return "-"
    }
    if (STRING === "divided_by" || STRING === "Divided_by") {
        return "/"
    }
}

let strAss = presentAss.assignment
let exp = strAss.split("(")
let ans = ""
for (let i= 0; i<exp.length -1 ; i++) {
  let str = exp[i]
  let res = convertToInt(str)
  ans += res
}

let solution = eval(ans)

  const handleAns = (event) => {
    event.preventDefault();
    if (parseInt(solution) == answer) {
      setMessage("Hurray!! You got it")
    }
    else {
      setMessage("Try Another time")
    }
    setAnswer('');
  };

  const onClickLogout = () => {
    history('/login')
  }

  
  return(
  <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/student'>
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
    <div className='background-container'>
      <div className='card-container'>
      <h1 className='heading'>Solve this Assignment</h1>
      <p className='para'>{presentAss.assignment}</p>
      <h2 className='heading'>Give Your Answer</h2>
      <form onSubmit={handleAns} class="form">
      < input className='input' type="text" placeholder='Answer' id="answer"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}/>
          <div className='btn-container'>
          <button type="submit" className="button" >Check</button>
          </div>
          <p className="message">{message}</p>
          </form>
          </div>
    </div>
    </>  
  )
}

export default Student;
