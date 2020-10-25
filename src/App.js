import React from 'react';
import Login from './components/Login.js';
import DoSomethingLoggedIn from './components/DoSomethingLoggedIn';
import Header from './components/common/Header';


function App() {
  return (
    <div className="App">
      <Header />
      { < Login /> }    
      { <DoSomethingLoggedIn /> }
    </div>
  );
}

export default App;
