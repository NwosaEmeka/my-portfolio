import React, {useState, useEffect} from 'react'
import Loader from './components/loaderComponent/Loader'
import MainPage from './pages/MainPage'
import './App.css';


function App() {
  const [isloading, setIsloading] = useState(true)
  useEffect(() =>{
    const loading = setTimeout(() => setIsloading(false), 3000)
    return () => clearTimeout(loading)
  }, [])
  
  return (
    <>
      {isloading ? 
        <Loader />
        :
        <div className="App">
        <MainPage />
      </div>
    } 
    </>
  );
}

export default App;
