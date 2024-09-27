import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Happy from './components/Happy';
import Greetings from './components/Greetings';
import InlineCSS from './components/InlineCSS';
import ExternalCSS from './components/ExternalCSS';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>Ayush ReactJS.
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
      {/* <Dashboard name="Ayush"/> */}
      {/* <Happy/> */}
      {/* <Greetings name="Ayush"/> */}
      {/* <InlineCSS/> */}
      {/* <ExternalCSS/> */}
      {/* <UseState/> */}
      <UseEffect/>
    </div>
  );
}

export default App;
