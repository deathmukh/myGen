import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const handleModalClick = () => {
    setModalVisible(true);
  }

  const handleModalClose = () => {
    setModalVisible(false);
  }

  return (
    <div className="App">
      <nav>
        <div class="logo-container">
          <img src={process.env.PUBLIC_URL + '/assets/logo.jpg'} alt="logo" class="logo"/>
          <h3>hello</h3>
        </div>
        
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <header>
        <div className="header-content">
          <h1>Welcome to Our Website</h1>
          <h2>Learn more about our company and services</h2>
          <button onClick={handleModalClick}>Click me!</button>
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
                <p>Thank you for your interest in our company!</p>
                <button onClick={handleModalClose}>Close</button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
