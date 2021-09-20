import React, { Component } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';

class AdminCities extends Component{

   state ={
       cities: [],
       };

       componentDidMount(){
        axios.get('http://localhost:3001/cities/show')
        .then((response)=>{
            console.log(response)
            this.setState({
                cities: response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        
        })
        
}

   deleteCities=(pid)=>{
    axios.delete('http://localhost:3001/cities/delete/' + pid, this.state.config)
    .then((response)=>{
        console.log(response.data.message);
    })
    .catch((err)=>{
        console.log(err.response);
    })
}

    render(){         
        return(
        <div>
                    <div id="d2-1">
                    <p>Top Cities</p>
                    </div>
                    <div style={{'display':'flex','justifyContent':'center'}}>
                    {this.state.cities.map((MyCities)=>{
                        return(
                            <div style={{'width':'15%'}}>
                            <div class="container" id="Destination"> 
                                   <div class="cities">
                                        <div id="cities-1">
                                            <img src={"http://localhost:3001/"+ MyCities.path} alt="" height="250px" width="250px"/>
                                            <h6><label>{MyCities.City_name}</label></h6>
                                            <p>{MyCities.Number_of_Hotel} Hotels <p id="av">Avg. ${MyCities.Average_Price}</p></p>
                                        </div>
                                    </div>
                                
                            </div>

                             {/* update */}
                        <div class="this">
                                        <p>Id:
                                {
                                        MyCities.Hotel_name
                                    }
                                </p> 
                                <p><button onClick={this.deleteCities.bind(this,MyCities._id)}>Delete</button>
                                    <p><Link to={'/UpdateCities/' + MyCities._id}>UPDATE</Link></p>
                                </p> 


              </div>
                        </div>
                        )
                    })
                    }
            </div>
                
                                     
        </div>
        

        )
    }
  
} 

export default AdminCities;