import './App.css';
import Navbar from './components/Navbar';

import{BrowserRouter} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Trending from './components/Trending';
import Featured from './components/Featured';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Booking from './component2/Booking';

function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
     <SearchBar></SearchBar>
     <Trending></Trending>
     <Featured></Featured>
     <Destination></Destination>
     <Footer></Footer>
     <Booking></Booking>
    </BrowserRouter>
  );
} 

export default App;