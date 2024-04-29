import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import video from './video.mp4';

class Meny extends React.Component {
    render () {
        return (

            <body className = 'annan'>

                <div className = 'logga'>
                    <h1> <NavLink id='rubrik'  to = '/'> Eurasia </NavLink>  </h1>
                    <p id = 'textLogga'> Kinesisk restaurang och steakhouse</p>
                </div>

                <div className = 'huvudmeny'>
                    <ul> 
                        <li><NavLink to = '/Meny'> Meny </NavLink> </li>
                        <li><NavLink to = '/Oppettider'> Öppettider </NavLink></li>
                        <li><NavLink to = '/About'> Om oss </NavLink></li>
                        <li><NavLink to = '/Boka' > Boka </NavLink></li>
                    </ul>
                </div>

                <div className = 'bild'> 
                    <img src = 'nudlar3.png' alt = 'En bild på asiatisk mat'/>
                </div>

                <div className = 'video'> 
                    <video width = '320' height = '240' controls autoplay>
                        <source src = {video.mp4} type = 'video/mp4' alt = 'En video på någon som lagar mat'/>
                        Din webbläsare stödjer inte videon.
                    </video>
                </div>   
                <audio autoplay hidden>
                    <source src = 'ljud.mp4' type = 'audio/mp4' alt = 'matlagnins-ljud'/>
                </audio>

                <div className = 'menyText1'>
                    <p> Kvällserbjudenade: </p>
                    <p> Valfri förrätt,</p>
                    <p> Chilikyckling, </p>
                    <p> starköl eller </p>
                    <p> hustes vin </p>
                    <p> Endast 259kr </p>

                </div>

                <div className = 'menyText2'>
                    <p> Lunchbuffé alla dagar: </p>
                    <p> 120 kr </p>
                    <p> Middagsbuffé mån - tors: </p>
                    <p> 150 kr </p>
                    <p> Middagsbuffé fre - sön: </p>
                    <p> 170 kr </p>
                </div>

                {/* <script src = 'myScript.js'> </script> */}
                
            </body>
        )
    }
}

export default Meny;