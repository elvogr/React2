import React from 'react';
import {NavLink, Link} from 'react-router-dom';


class Boka extends React.Component{
    render() {
        return (
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

                    <div class = 'bild'> 
                        <img src = 'nudlar3.png' alt = 'picture of chineese food'/>
                    </div>


                    <div className = 'textFormulär'>
                        <h2> Boka ett bord här</h2>
                        <p>Ring eller fyll i dina uppgifter i formuläret och </p>
                        <p>klicka sedan för att skicka in en bokningsförfrågan</p> 
                        <p>till oss - vi kontaktar dig inom kort.</p>
                        <p>OBS! Ingen bordsbokning är gällande innan vi har</p> 
                        <p>återkopplat till dig och bekräftat bokningen.</p>
                    </div>

                    <div className = 'formulär'>
                        <form>
                            <label for = 'namn'> Namn: </label>
                            <input type = 'text' id = 'namn' name = 'namn'/> <br/>
                            <label for = 'Tel'> Telefon: </label>
                            <input type = 'text' id = 'tel' name = 'tel'/> <br/>
                            <label for = 'datum'> Datum: </label>
                            <input type = 'text' id = 'datum' name = 'datum'/><br/>
                            <label for = 'tid'> Tid: </label>
                            <input type = 'text' id = 'tid' name = 'tid'/> <br/>
                            <label for = 'personer'> Antal personer: </label>
                            <input type = 'text' id = 'personer' name = 'personer'/> <br/>
                            <input type = 'submit' value = 'submit'/>
                        </form>
                    </div>
                    {/* <script src = 'myScript.js'> </script> */}
                </body>

            </main>
        )
    }
}
export default Boka;