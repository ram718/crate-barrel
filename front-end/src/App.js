import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <br/>
      <div>
      <AllRoutes/>
      </div>
    </div>
  );
}

export default App;
