import Planet from './Components/UI/Planet/Planet';
import Cursor from './Components/UI/Cursor/Cursor';
import Header from './Components/Commons/Header/Header';
import './App.scss';
import { useState } from 'react';


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
        <Planet />
        <Header onActive={handleSetActive} onInactive={handleSetInactive}/>
        <Cursor />
    </div>
  );
}

export default App;
