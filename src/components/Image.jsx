import React from "react";
import './Image.css'
import welcomeImage from '../assets/welcomeImage.jpg'


function Image(){
    return(
        <div className="image">
            <img src={welcomeImage} alt="Company Logo" className="img"></img>
        </div>
    )
}

export default Image;