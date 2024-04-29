import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import SimpleButton from './simpleButton';

class Home extends React.Component{
    render(){
        return(
            <main>
                <body class = 'startsida'>

                    <div class = 'logga'>
                        <h1> <NavLink id='rubrik'  to = '/'> Eurasia </NavLink>  </h1>
                        <p id = 'textLogga'> Kinesisk restaurang och steakhouse</p>
                    </div>

                    <div class = 'huvudmeny'>
                        <ul> 
                        <li><NavLink to = '/Meny'> Meny </NavLink> </li>
                        <li><NavLink to = 'Oppettider'> Öppettider </NavLink></li>
                        <li><NavLink to = 'About'> Om oss </NavLink></li>
                        <li><NavLink to = 'boka' > Boka </NavLink></li>
                        </ul>
                    </div>

                    <div class = 'bild'> 
                        <img src = 'nudlar3.png' alt = 'picture of chineese food'/>
                    </div>
                    {/* <div class = "betyg">  
                        <div class = "con">
                            <h3 style = "margin-top : 80px; color: rgb(255, 255, 255);">Betygssätt oss!:</h3>  
                            <i class = "fa fa-star" aria-hidden = "true" id = "st1"></i>  
                            <i class = "fa fa-star" aria-hidden = "true" id = "st2"></i>  
                            <i class = "fa fa-star" aria-hidden = "true" id = "st3"></i>  
                            <i class = "fa fa-star" aria-hidden = "true" id = "st4"></i>  
                            <i class = "fa fa-star" aria-hidden = "true" id = "st5"></i>  
                        </div>
                    </div>  */}

                    <SimpleButton />

                </body>
            </main>
        );
    }
}

export default Home;