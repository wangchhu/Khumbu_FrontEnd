import React from 'react';
import './Featured.css';
import './Trending.css';

function Featured() {
    return (
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
    )
}

export default Featured
