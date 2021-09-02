import { Component } from "react";
import{Route} from 'react-router-dom';
import AddTrending from "../Pages/AddTrending";
import AddFeatured from "../Pages/AddFeatured";
import Book from "../Pages/Book";
import Travel from "../Pages/Travel";

class Routey extends Component{
    render(){
        return(
            <div>
                <Route path ='/Book' component={Book}/>
                <Route exact path ='/' component={Travel}/>
                <Route path='/AddTrending' component={AddTrending}/>
                <Route path='/AddFeatured' component={AddFeatured}/>
            </div>
        )
    }
}

export default Routey;