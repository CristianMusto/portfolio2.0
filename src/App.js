import Planet from './Components/UI/Planet/Planet';
import Cursor from './Components/UI/Cursor/Cursor';
import Header from './Components/Commons/Header/Header';
import './App.scss';
import { useState } from 'react';
import Loader from './Components/UI/Loader/Loader';


function App() {

  const [isActive, setIsActive] = useState();

  const handleSetActive = () => {
    setIsActive(true);
  }

  const handleSetInactive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
        <Loader />
        <Planet />
        <Header onActive={handleSetActive} onInactive={handleSetInactive}/>
        <Cursor />
    </div>
  );
}

export default App;
