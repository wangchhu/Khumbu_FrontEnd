import { Component } from "react";

class Travel extends Component{
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
        {/* Trending */}
        <div>
            <div class="hotels" id="Trending">
                    <div class="a3">
                        <p>Trending<p id="a3-1">Now</p></p>
                    </div>
                <div class="rooms">
                    <div id="r1">
                    <a href="/Book"><img src="/h1.jpg" alt="" height="200px" width="400px"/></a>
                    </div>
                    <div id="r1-2">
                        <h6>Hotel Everest</h6>
                        <p id="a">Boudha, Kathmandu<br/></p><h5>NPR 1500</h5><p id="xtra">per room per night</p>
                    </div>
                    {/* <div id="r1">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px">
                        <h6>Hotel Everest 2</h6>
                        <a id="a">Boudha, Kathmandu <br></a><h5>NPR 1500</h2><p id="xtra">per room per night</p>
                    </div>
                    <div id="r1">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px">
                        <h6>Hotel Everest 3</h6>
                        <a id="a">Boudha, Kathmandu <br></a><h5>NPR 1500</h2><p id="xtra">per room per night</p>
                    </div>
                    <div id="r1">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px"/>
                        <h6>Hotel Everest 4</h6>
                        <p id="a">Boudha, Kathmandu <br></p> <h5>NPR 1500</h2><p id="xtra">per room per night</p>
                    </div> */}
                </div>
            </div>
        </div>
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
                    {/* <div id="r2">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px">
                        <h6>Hotel Everest 2</h6>
                        <a id="a">Boudha, Kathmandu<br></a><h5>NPR 2200</h2><p id="xtra">per room per night</p>
                    </div>
                    <div id="r2">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px">
                        <h6>Hotel Everest 3</h6>
                        <a id="a">Boudha, Kathmandu<br></a><h5>NPR 2200</h2><p id="xtra">per room per night</p>
                    </div>
                    <div id="r2">
                        <img src="Public/h1.jpg" alt="" height="200px" width="400px">
                        <h6>Hotel Everest 4</h6>
                        <p id="a">Boudha, Kathmandu<br></a><h5>NPR 2200</h2><p id="xtra">per room per night</p>
                    </div> */}
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
                        {/* <div id="cities-1">
                            <img src="Public/los.jpg" alt="" height="250px" width="250px">
                            <h6>Los Angeles</h6>
                            <p>5,990 Hotels <a id="av">Avg. $175</a></p>
                        </div>
                        <div id="cities-1">
                            <img src="Public/los.jpg" alt="" height="250px" width="250px">
                            <h6>Los Angeles</h6>
                            <p>5,990 Hotels <a id="av">Avg. $200</a></p>
                        </div>
                        <div id="cities-1">
                            <img src="Public/los.jpg" alt="" height="250px" width="250px">
                            <h6>Los Angeles</h6>
                            <p>5,990 Hotels <a id="av">Avg. $300</a></p>
                        </div> */}
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