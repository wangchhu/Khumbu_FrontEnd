import { Component } from "react";
import{Route} from 'react-router-dom';
import Book from "../Pages/Book";
import Travel from "../Pages/Travel";

class Routey extends Component{
    render(){
        return(
            <div>
                <Route path ='/Book' component={Book}/>
                <Route exact path ='/' component={Travel}/>
            </div>
        )
    }
}

export default Routey;