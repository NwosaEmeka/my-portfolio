import React, { useState, useEffect } from 'react';
import Loader from './components/loaderComponent/Loader';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    return() => clearTimeout(timer)
  })
  return (
    <div className="App">
      {isLoading ?
        <Loader /> :
        <MainPage />
    }
      
    </div>
  );
}

export default App;
