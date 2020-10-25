import React from 'react';
import Login from './components/Login.js';
import DoSomethingLoggedIn from './components/DoSomethingLoggedIn';


function App() {
  return (
    <div className="App">
      { < Login /> }    
      { <DoSomethingLoggedIn /> }
    </div>
  );
}

export default App;
