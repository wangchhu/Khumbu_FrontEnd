import React from 'react'
import CardItem from './CardItem'
import './Card.css';

function Card() {
    return (
        <>
            <div class="cards">
                <h1>Epic Destination</h1>
                <div clas="cards__contaniner">
                    <div class="cards__wrapper">
                        <ul class="cards__items">
                            <CardItem
                            src="/los.jpg"
                            text=""Explore the Epic Destination
                            label="Adventure"
                            path="/services"/>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Card;