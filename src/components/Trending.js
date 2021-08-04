import React from 'react'
import { Link } from 'react-router-dom';
import './Trending.css';

function Trending() {
    return (
        <div>
            <div class="hotels" id="Trending">
                    <div class="a3">
                        <p>Trending<p id="a3-1">Now</p></p>
                    </div>
                <div class="rooms">
                    <div id="r1">
                    <Link href="/check"><img src="/h1.jpg" alt="" height="200px" width="400px"/></Link>
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
    )
}
export default Trending
