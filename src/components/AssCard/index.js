import React from "react"
import './index.css'
function AssCard(props) {
    const {item} = props
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
  
  let strAss = item
  let exp = strAss.split("(")
  console.log(exp)
  let ans = ""
  for (let i= 0; i<exp.length -1 ; i++) {
    let str = exp[i]
    let res = convertToInt(str)
    ans += res
  }
  
  let solution = eval(ans)
    return(
  <div className="container">
    <h1 className="card-title">{item}</h1>
    <p className="solution">The Solution is {solution}</p>
  </div>
    )
}

export default AssCard