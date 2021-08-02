import './App.css';
import Navbar from './components/Navbar';

import{BrowserRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Trending from './components/Trending';

function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
     <SearchBar></SearchBar>
     <Trending></Trending>
    </BrowserRouter>
  );
} 

export default App;