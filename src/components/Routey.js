import { Component } from "react";
import{Route} from 'react-router-dom';
import AddTrending from "../Pages/AddTrending";
import AddFeatured from "../Pages/AddFeatured";
import Book from "../Pages/Book";
import Travel from "../Pages/Travel";
import AddCities from "../Pages/AddCities";

class Routey extends Component{
    render(){
        return(
            <div>
                <Route path ='/Book' component={Book}/>
                <Route exact path ='/' component={Travel}/>
                <Route path='/AddTrending' component={AddTrending}/>
                <Route path='/AddFeatured' component={AddFeatured}/>
                <Route path='/AddCities' component={AddCities}/>
            </div>
        )
    }
}

export default Routey;