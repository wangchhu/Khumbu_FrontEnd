import { Component } from 'react';
import './Navbar.css';

class Navbar extends Component{
    render() {
    return (
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
                                    <a href="/Home">Home</a>
                                </li>
                                <li>
                                    <a href="/Cities">Cities</a>
                                </li>
                                <li>
                                    <a href="/Hotels">Hotels</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
}

export default Navbar;