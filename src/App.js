import Planet from './Components/UI/Planet/Planet';
import Cursor from './Components/UI/Cursor/Cursor';
import Header from './Components/Commons/Header/Header';
import './App.scss';
import Loader from './Components/UI/Loader/Loader';
import Main from './Components/Main/Main';
import SpaceBackground from './Components/UI/SpaceBackground/SpaceBackground';


function App() {

  return (
    <div className="App">
        <Header />
        <Planet />
        <Main />
        <Cursor />
        {/* <Loader /> */}
        <SpaceBackground/>
    </div>
  );
}

export default App;
