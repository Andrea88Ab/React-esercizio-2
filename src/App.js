
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavBar from './components/CustomNavbar';
import Welcome from './components/Welcom';
import './components/Welcome.css'
import MyLibri from './components/Libri';
import Myfooter from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomNavBar/>
        <Welcome/>
       <MyLibri/> 
      </header>
      <footer>
        <Myfooter/>
      </footer>
    </div>
  );
}

export default App;
