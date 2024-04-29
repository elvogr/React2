import React from 'react';
import Slideshow from '../Slideshow';
import {NavLink, Link} from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <main>
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

                    <div className = 'omOss'> 
                        <h2> Om oss: </h2>
                        <p>Vi är en kinesisk restaurang i vacker och avslappnande orientalisk miljö</p>
                        <p> i centrala Umeå. Vi serverar buffé och á la carte varje dag! </p>
                        <p>Vi har ett stort utbud på totalt 130 asiatiska-, kontinentala rätter och pizzor.</p>
                        <p>Naturligtvis går det bra att "ta med" också! Se bilder på vår goda mat nedan!</p>
                    </div>

                    <Slideshow/>

                </body>
            </main>
        )
    }
}

export default About;