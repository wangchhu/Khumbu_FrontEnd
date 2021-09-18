import './App.css';
import './Travel.css';
import SocialFollow from "./SocialFollow";
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
import Featured from './Pages/Featured';
import Cities from './Pages/Cities';
// import Travel from './Pages/Travel';
// import { Component } from 'react';
// import { Component } from 'react';
 

function App() {
  return (
 <BrowserRouter>
 {/* <Component></Component> */}
 {/* <Travel></Travel> */}
  <Routey></Routey>
  <Featured></Featured>
  <Cities></Cities>
  <SocialFollow></SocialFollow>
 </BrowserRouter>
  );
} 

export default App;