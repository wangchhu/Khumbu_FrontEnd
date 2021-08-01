import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
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
    )
}

export default SearchBar;
