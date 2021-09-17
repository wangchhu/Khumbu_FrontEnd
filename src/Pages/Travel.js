import React, { Component } from "react";
import axios from 'axios';

class Travel extends Component{

   state ={
       trending: [],
       featured: [],
       cities: [],
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
   componentDidMount2(){
    axios.get('http://localhost:3001/featured/show')
    .then((response)=>{
        console.log(response)
        this.setState({
            featured: response.data.data
        })
    })
    .catch((err)=>{
         console.log(err.response)
     
    })
    
}

// componentDidMount3(){
//     axios.get('http://localhost:3001/Cities/show')
//     .then((response)=>{
//         console.log(response.data)
//         this.setState({
//             featured: response.data
//         })
//     })
//     .catch((err)=>{
//          console.log(err.response)
//     })
    
// }

    render(){
        const {isLoaded}=this.state;
        return(
        <div>
            {/* Nav bar */}
            <div>
            <div class="menu">
                <div class="container">
                <div class="row">
                    <div class="logo">
                            <a href="/Home">
                            <img src="/newkhumbu.png" alt=""/>
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
     

         {/* Featured */}
         <div class="a4">
                         <p>Our Featured <p id="a4-1">Hotels</p></p>
         </div>
        {this.state.featured.map((MyFeatured)=>{
            return(
                 <div>
                 <div class="hotels-2">
                     <div class="featured-Rooms">

                         <div id="r2">
                         <a href="/Book"> <img src={"http://localhost:3001/"+MyFeatured.Image}  alt="" height="200px" width="400px"/></a>
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
       
    }
        {/* Destination  */}
        <div>
            <div class="container" id="Destination">
                    <div class="d2">
                        <h3>These top destinations are just a click away</h3>
                    </div>
                <div id="d2-1">
                    <p>Top Cities</p>
                    <div class="cities">
                        <div id="cities-1">
                            <img src="/los.jpg" alt="" height="250px" width="250px"/>
                            <h6><label>Los Angeles</label></h6>
                            <p>500 Hotels <p id="av">Avg. $120</p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer */}
        <div>
            <div class="footer1">
                <div class="foot-2">
                    <a href="#Home">
                        <img src="/newkhumbu.png"  alt="img"/>
                    </a>
                </div>
            </div>
                <div class="foot-info">
                    <p class="foot-para">Want to receive exclusive hotel offers? <a href="#Home">Subscribe to our newsletter!</a></p>
                </div>
            
                {/* <!-- f2 --> */}
                <div class="footer2">
                    <div>
                        
                    </div>
                </div>
        </div>       
            
        </div>

        )
    }
  
} 

export default Travel;