import Planet from './Components/UI/Planet/Planet';
import Cursor from './Components/UI/Cursor/Cursor';
import Header from './Components/Commons/Header/Header';
import './App.scss';
import { useState } from 'react';
import Main from './Components/Main/Main';


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
        <Main />
        <Cursor />
    </div>
  );
}

export default App;
