
import './App.css';
import Catalogo from './components/catalogo/catalogo';
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer';

import NavBar from './components/navbar/navbar';
// import TitleComponent from './components/catalogo/title/title';
// import List from './components/list/list'; 



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <Catalogo/>
      {/* Aquí se declaran las props */}
      {/* <TitleComponent name="Liz"/> */}
      {/* <List/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
