import React, { Component } from "react";
import axios from 'axios';


class Travel extends Component{

   state ={
       trending: [],
       inLoaded: false
    //    config:{
    //        headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
    //    }
       };


   componentDidMount(){
       axios.get('http://localhost:3001/Trending/show')
       .then((response)=>{
           console.log(response)
            setTimeout(()=>{
                this.setState({
                    trending: response.data.data, isLoaded: true
                })
            },2000); 
       })
       .catch((err)=>{
            console.log(err.response)
       })
       
   }

    render(){
        const {isLoaded}=this.state;
        return(
        <div>
            {/* Nav bar */}
            
            <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="menu">
                <div class="container">
                <div class="row">
                    <div class="logo">
                            <a href="/Home">
                            <img src="/travel1.png" alt=""/>
                            </a>
                    </div>
                        <div class="nav">
                               <nav class="mainmenu">
                            <ul>
                                <li class="activa">
                                    <a href="#Home">Home</a>
                                </li>
                                <li>
                                    <a href="#Destination">Cities</a>
                                </li>
                                <li>
                                    <a href="#Trending">Hotels</a>
                                </li>
                                <li>
                                    <a href="#Contact">Contact Us</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>

            {/* Search */}
            <div>
                <div class="c1">
                    <div class="tibet">
                    
                       <h1>TRAVEL </h1>
                    </div>
                <div class="para1">
                    <div class="a1">
                    <p>Find Deals on Hotel now</p>
                    </div>
                </div>
            </div>
            <div class="f1">
            <input id="textf1" type="text" placeholder="Search your destination" width="30" height="30"/>   
             {/* <div class="autocom-box">
                 <li>Hotel near me</li>
                 <li>Hotel Hyatt</li>
                 <li>Budegt Hotel rooms</li>
                 <li>Los angeles</li>
                 <li>Kathmandu</li>
             </div> */}
            </div>
            <div class="f2">
            <button class="btn-margin">Search</button>    
            </div>
            <div class="a2">
                <p>From cosy country homes to funky city flats</p>
            </div>
        </div>       
                    
                    <div class="a3">
                        <p>Trending<p id="a3-1">Now</p></p>
                        
                    </div>
                   
                    {!isLoaded ? <div class="load">Loading...</div> :
                     <div style={{'display':'flex','justifyContent':'center'}}>
                    
                     { this.state.trending.map((MyTrending)=>{
                        return(
                        // {/* Trending */}
                <div class="flexy" style={{'width':'25%'}}>
                           <div class="hotels" id="Trending">
        
                        <div class="rooms">
                            <div id="r1">
                            <a href="/Book"><img src={"http://localhost:3001/" + MyTrending.path} alt="" height="200px" width="400px"/></a>
                            </div>
                            <div id="r1-2">
                                <h6>{MyTrending.Hotel_name}</h6>
                                <p id="a">{MyTrending.Location}<br/></p><h5>NPR {MyTrending.Price}</h5><p id="xtra">per room per night</p>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                    })
            
                }   </div>
                     }           
        </div>

        )
    }
  
} 

export default Travel;