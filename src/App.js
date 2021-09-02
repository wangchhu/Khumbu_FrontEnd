import './App.css';
import './Travel.css';
// import Navbar from './components/Navbar';

import{BrowserRouter} from 'react-router-dom';
// import SearchBar from './components/SearchBar';
// import Trending from './components/Trending';
// import Featured from './components/Featured';
// import Destination from './components/Destination';
// import Footer from './components/Footer';
// import Booking from './components/Pages/Booking';
// import Card from './components/Card';
// import check from './components/Pages/check';
// import { Component } from 'react';
import Routey from './components/Routey';
// import Travel from './components/Travel';
// import { Component } from 'react';
// import { Component } from 'react';
 

function App() {
  return (
 <BrowserRouter>
 {/* <Component></Component> */}
 {/* <Travel></Travel> */}
  <Routey></Routey>
 </BrowserRouter>
  );
} 

export default App;