import React from "react"
import ReactDOM from "react-dom"

function temporaryName() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" alt="Logo"/>
      <h1>Fun Facts About React </h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

    </div>
  )
}
ReactDOM.render(temporaryName(), document.getElementById("root"))