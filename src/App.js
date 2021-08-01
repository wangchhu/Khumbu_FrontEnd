import './App.css';
import Navbar from './components/Navbar';

import{BrowserRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
     <SearchBar></SearchBar>
    </BrowserRouter>
  );
} 

export default App;