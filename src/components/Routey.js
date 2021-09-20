import { Component } from "react";
import{Route} from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import AddTrending from "../Pages/AddTrending";
import AddFeatured from "../Pages/AddFeatured";
import Book from "../Pages/Book";
import Travel from "../Pages/Travel";
import AddCities from "../Pages/AddCities";
import BookFeatured from "../Pages/BookFeatured";
import Esewa from "../Pages/Payment/Esewa";
import Featured from "../Pages/Featured";
import Cities from "../Pages/Cities";


import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import UpdateTrending from "../Pages/UpdateTrending";
import AdminTrending from "../Pages/AdminTrending";
import AdminFeatured from "../Pages/AdminFeatured";


class Routey extends Component{
    render(){
        return(
            <div>
                <Route path ='/Book' component={Book}/>
                <Route path ='/BookFeatured' component={BookFeatured}/>
                <Route exact path ='/' component={Travel}/>
                <Route exact path ="/" component={Featured}/>
                <Route exact path ="/" component={Cities}/>
                <Route path='/AddTrending' component={AddTrending}/>
                <Route path='/AddFeatured' component={AddFeatured}/>
                <Route path='/AddCities' component={AddCities}/>
                <Route path='/Esewa' component={Esewa}/>
                <Route path ="/UpdateTrending" component={UpdateTrending}/>
                <Route path ="/AdminTrending" component={AdminTrending}/>
                <Route path ="/AdminFeatured" component={AdminFeatured}/>
                <Route exact path="/">
                <div class="chatbox" style={{maxWidth:"300px"}}>
                <Chatbot 
                config={config} 
                actionProvider={ActionProvider} 
                messageParser={MessageParser}></Chatbot>
                
                </div>
                </Route>
            </div>
        )
    }
}

export default Routey;