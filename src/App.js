import React, {lazy, Suspense } from 'react'
import Loader from './components/loaderComponent/Loader'
import './App.css';

const MainPage = lazy(() => import('./pages/MainPage'))

function App() {
  return (
    <Suspense fallback ={<Loader />}>
      <div className="App">
        <MainPage />
    </div>
    </Suspense>
  );
}

export default App;
