import React from 'react'
import './Destination.css';

function Destination() {
    return (
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
                            <h6>Los Angeles</h6>
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
    )
}

export default Destination
