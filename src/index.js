// import React from 'react';
// import ReactDOM from 'react-dom'

// function Page() {
//   return (
//     <div>
//       <header>
//         <nav>
//           <img src={require('./react-logo.png')} width="40px" alt="Logo"/>
//         </nav>
//       </header>
//       <h1>Reasons I'm Excited to Learn React</h1>
//       <ol>
//         <li>It's a popular library, so I'll be
//           able to fit in with the cool kids!
//         </li>
//         <li>
//           I'm more likely to get a job as a developer
//           if I know React
//         </li>
//       </ol>
//       <footer>
//         <small>@ 2022 Fatima Development. All rights reserved.</small>
//       </footer>
//   </div>
//   )
 
// };

// ReactDOM.render(<Page />, document.getElementById("root"))

//Parent/Child Components
import React from "react"
import ReactDOM from "react-dom"
import  './index.css'

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
*/

function Header() {
    return (
        <header>
            <nav className="nav">
          <img className ="logo" src={require("./react-logo.png")} alt="Logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))