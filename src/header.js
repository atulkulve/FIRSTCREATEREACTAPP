import React from 'react'
import logo from './logo.svg'
const header = () =>{

    return (
        <>
        <header className="App-header">
        <div className="container">
          {/* <img src={loginimgx}/> */}
          <div className="real_facts">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </div>
          <div className="note_section">
            <div className="note_header">
              Note
            </div>
            <div className="note_body_section">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aut magni rem ullam vitae. Ipsam commodi animi similique, incidunt earum vitae corrupti reiciendis molestias beatae laborum nulla quas assumenda in.
            </div>
          </div>
        </div>
          
        </header>
        </>
    )
}

export default header;