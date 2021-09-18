import React, { Component } from "react";
import axios from 'axios';

class Featured extends Component{
state={
    featured:[]
}

componentDidMount(){
    axios.get('http://localhost:3001/Featured/show')
    .then((response)=>{
        console.log(response)
        this.setState({
            featured: response.data
        })
    })
    .catch((err)=>{
        console.log(err.response)
    
    })
    
}
    render(){
        return(
            <div>
                 <div class="a4">
                        <p>Our Featured <p id="a4-1">Hotels</p></p>
         </div>
         <div style={{'display':'flex','justifyContent':'center'}}>
        {this.state.featured.map((MyFeatured)=>{
            return(
                 <div style={{'width':'25%'}}>
                 <div class="hotels-2">
                     <div class="featured-Rooms">
                         <div id="r2">
                         <a href="/Book"> <img src={"http://localhost:3001/" + MyFeatured.path}  alt="" height="200px" width="400px"/></a>
                         </div>
                             <div id="r2-1">
                                 <h6>{MyFeatured.Hotel_name}</h6>
                                 <p id="a">{MyFeatured.Location}<br/></p><h5>NPR {MyFeatured.Price}</h5><p id="xtra">per room per night</p>
                             </div>
                         
                     </div>
                 </div>
             </div>
            )
        })
       
    }</div>
            </div>
        )
    }
   
}
export default Featured;