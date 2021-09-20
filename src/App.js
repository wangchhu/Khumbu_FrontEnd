// import Chatbot from 'react-chatbot-kit';
import './App.css';
import './Travel.css';
import SocialFollow from "./SocialFollow";

// import Navbar from './components/Navbar';

import{BrowserRouter} from 'react-router-dom';
import Routey from './components/Routey';
// import Featured from './Pages/Featured';
// import Cities from './Pages/Cities';

// import config from './chatbot/config';
// import MessageParser from './chatbot/MessageParser';
// import ActionProvider from './chatbot/ActionProvider';



function App() {
  return (
 <BrowserRouter>
 {/* <Component></Component> */}
 {/* <Travel></Travel> */}
  <Routey></Routey>
  
  <SocialFollow></SocialFollow>
 
 
 </BrowserRouter>
  );
} 

export default App;