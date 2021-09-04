import { Component } from "react";
import axios from 'axios';

class Travel extends Component{

   state ={
       trending: [],
       featured: [],
       citeies: []
    //    config:{
    //        headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
    //    }
   }
   componentDidMount(){
       axios.get('http://localhost:3001/Trending/show')
       .then((response)=>{
           console.log(response.data)
           this.setState({
               trending: response.data
           })
       })
       .catch((err)=>{
            console.log(err.response)
       })
       
   }
   componentDidMount2(){
    axios.get('http://localhost:3001/Featured/show')
    .then((response)=>{
        console.log(response.data)
        this.setState({
            featured: response.data
        })
    })
    .catch((err)=>{
         console.log(err.response)
    })
    
}

componentDidMount3(){
    axios.get('http://localhost:3001/Cities/show')
    .then((response)=>{
        console.log(response.data)
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
            </div>
            <div class="f2">
            <button class="btn-margin">Search</button>    
            </div>
            <div class="a2">
                <p>From cosy country homes to funky city flats</p>
            </div>
            
        </div>

        {
            this.state.trending.map((MyTrending)=>{
                return(
                // {/* Trending */}
        <div>
            <div class="hotels" id="Trending">
                    <div class="a3">
                        <p>Trending<p id="a3-1">Now</p></p>
                    </div>
                <div class="rooms">
                    <div id="r1">
                    <a href="/Book"><img src={"http://localhost:3001/"+MyTrending.Image} alt="" height="200px" width="400px"/></a>
                    </div>
                    <div id="r1-2">
                        <h6>{MyTrending.Hotel_name}</h6>
                        <p id="a">{MyTrending.location}<br/></p><h5>NPR {MyTrending.Price}</h5><p id="xtra">per room per night</p>
                    </div>
                
                </div>
            </div>
        </div>
                )
            })
        }   
        {/* Featured */}
        <div>
            <div class="hotels-2">
                <div class="a4">
                    <p>Our Featured <p id="a4-1">Hotels</p></p>
                </div>
                <div class="featured-Rooms">
                    <div id="r2">
                        <img src="/h1.jpg" alt="" height="200px" width="400px"/>
                    </div>
                        <div id="r2-1">
                            <h6>Hotel Everest</h6>
                            <p id="a">Boudha, Kathmandu<br/></p><h5>NPR 2200</h5><p id="xtra">per room per night</p>
                        </div>
                    
                </div>
            </div>
        </div>
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