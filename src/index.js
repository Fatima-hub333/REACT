// import React from "react"
// import ReactDOM from "react-dom"

// function TemporaryName() {
//   return (
//     <div>
//       <img src="./react-logo.png" width="40px" alt="Logo"/>
//       <h1>Fun Facts About React </h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100k stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>

//     </div>
//   )
// }
// ReactDOM.render(<TemporaryName />, document.getElementById("root"))

import React from 'react';
import ReactDOM from 'react-dom'

function Page() {
  return (
    <div>
      <img src={require('./react-logo.png')} alt="Logo" width="40px"/>
    <h1>I want to Learn React because of the following reasons;</h1>
    <ol>
      <li>React use Composable Coding</li>
      <li>React is Fast & easy to understand</li>
      <li>React is a hireable skill</li>
    </ol>
  </div>
  )
 
};

ReactDOM.render(<Page />, document.getElementById("root"))