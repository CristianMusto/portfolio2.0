import Planet from './Components/UI/Planet/Planet';
import Cursor from './Components/UI/Cursor/Cursor';
import Header from './Components/Commons/Header/Header';
import './App.scss';
import Loader from './Components/UI/Loader/Loader';
import Main from './Components/Main/Main';


function App() {

  return (
    <div className="App">
        <Header />
        <Planet />
        <Main />
        <Cursor />
        <Loader />
    </div>
  );
}

export default App;
