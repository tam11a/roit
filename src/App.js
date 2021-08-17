import './App.css';
import Splash from './components/Splash';
import Nav from './components/Nav';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App flex-inline">
      <div className="AppDiv-1 flex-col-center">
        <Splash />
      </div>
      <div className="AppDiv-0 flex-col-center">
        <Nav />
      </div>
      <div className="AppDiv-2">
        <Pages />
      </div>
    </div>
  );
}

export default App;
