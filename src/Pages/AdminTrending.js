import React, { Component } from "react";
import axios from 'axios';
import{Link} from 'react-router-dom';

class AdminTrending extends Component{

   state ={
       trending: [],
       };


   componentDidMount(){
       axios.get('http://localhost:3001/Trending/show')
       .then((response)=>{
           console.log(response)
                this.setState({
                    trending: response.data.data, isLoaded: true
                }) 
       })
       .catch((err)=>{
            console.log(err.response)
       })
       
   }

   deleteTrending=(pid)=>{
    axios.delete('http://localhost:3001/Trending/delete/' + pid, this.state.config)
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
                    <div class="a3">
                        <p>Trending<p id="a3-1">Now</p></p>
                    </div>
                    <a href=" " class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a href=" " class="next" onclick="plusSlides(1)">&#10095;</a>   

                     <div style={{'display':'flex','justifyContent':'center'}}>
                    
                     { this.state.trending.map((MyTrending)=>{
                        return(
                        // {/* Trending */}
                <div class="flexy" style={{'width':'25%'}}>
                           <div class="hotels" id="Trending">
        
                        <div class="rooms" onclick="currentSlide(1) ">
                            <div id="r1">
                            <a href="/Book"><img src={"http://localhost:3001/" + MyTrending.path} alt="" height="200px" width="400px"/></a>
                            </div>
                            <div id="r1-2">
                                <h6>{MyTrending.Hotel_name}</h6>
                                <p id="a">{MyTrending.Location}<br/></p><h5>NPR {MyTrending.Price}</h5><p id="xtra">per room per night</p>
                            </div>
                        </div>
                    </div>
                     {/* update */}
                <div class="this">
                <p>Id:
                  {
                        MyTrending.Hotel_name
                    }
                </p> 
                <p><button onClick={this.deleteTrending.bind(this,MyTrending._id)}>Delete</button>
                    <p><Link to={'/UpdateTrending/' + MyTrending._id}>UPDATE</Link></p>
                  </p> 


              </div>
                   
                </div>

               
                        )
                    })
            
                }   </div>
                
                                     
        </div>
        

        )
    }
  
} 

export default AdminTrending;