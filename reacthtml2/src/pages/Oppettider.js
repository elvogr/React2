import React from 'react';
import {NavLink, Link} from 'react-router-dom';

class Oppettider extends React.Component {

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
                    <img src = 'nudlar3.png' alt = 'picture of chineese food'/>
                </div>

                <div id = 'öppettider'> 
                    <p> Öpptettider: </p>
                    <p> Mån - Tors:</p>
                    <p>11:00 - 14:30,</p>
                    <p>16:30 - 21:00</p>
                        
                    <p>Fredag:</p>
                    <p>11:00 - 14:30, </p>
                    <p>16:30 - 22:00</p>
                        
                    <p>Söndag & helgdagar: </p>
                    <p>15:00 - 21:00 </p>
                </div>

                {/* <script src = 'myScript.js'> </script> */}
                
                    
            </body>
        )
    }
}

export default Oppettider;