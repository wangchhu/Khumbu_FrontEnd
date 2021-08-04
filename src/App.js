import './App.css';
import Navbar from './components/Navbar';

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Trending from './components/Trending';
import Featured from './components/Featured';
import Destination from './components/Destination';
import Footer from './components/Footer';
import Booking from './components/Pages/Booking';
// import Card from './components/Card';
import check from './components/Pages/check';
 

function App() {
  return (
    <>
    <Router>
     <Navbar></Navbar>
     <SearchBar></SearchBar>
     <Trending></Trending>
     <Featured></Featured>
     <Destination></Destination>
     <Footer></Footer>
     {/* <Card></Card> */}
     <Switch>
     <Route path='/Booking' exact component={Booking}/>
     <Route path='/check' component={check}/>
     </Switch>
    </Router>
    </>
  );
} 

export default App;