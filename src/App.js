import React from 'react';
import DoSomethingLoggedIn from './components/DoSomethingLoggedIn';
import Header from './components/common/Header';


function App() {
  return (
    <div className="App">
      <Header />
      { <DoSomethingLoggedIn /> }
    </div>
  );
}

export default App;
