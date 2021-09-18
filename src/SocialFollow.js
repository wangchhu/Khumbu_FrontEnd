import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div>
    <div class="footer1">
        <div class="foot-2">
            <a href="#Home">
                <img src="/travel2.png"  alt="img"/>
            </a>
        </div>
        <div>
        
        </div>
    </div>
        <div class="foot-info">
            <p class="foot-para">Want to receive exclusive hotel offers? <a href="#Home">Subscribe to our newsletter!</a></p>
        </div>
    
        {/* <!-- f2 --> */}

    <div class="social-container">
        <a href="/"
    className="youtube social">
    <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
    <a href="/"
    className="facebook social">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a href="/" className="twitter social">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="/"
    className="instagram social">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    </div>
    </div>
  );
}