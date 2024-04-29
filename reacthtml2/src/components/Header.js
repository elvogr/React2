import React from 'react';
class Header extends React.Component {
    render(){
        return (
            <head>
                <title> Restaurang Eurasia </title>
                <link rel = 'stylesheet' type = 'text/css' href = './eurasia.css' /> 
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Shojumaru'/>
                <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Anonymous Pro'/>
                <meta charset = 'UTF-8'/>
                <meta name = 'description' content = 'Resturang Eurasia Umeå'/>
                <meta name = 'keywords' content = 'Eurasia, kinesisk restaurang, umeå'/>
                <meta name = 'author' content = 'Elvira Ögren'/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"> </script>  
                <script src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.min.js"> </script>  
                <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>  
                <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

                <div className = 'logga'>
                    <h1> <a id = 'rubrik' href = 'index.html'> Eurasia </a>  </h1>
                    <p id = 'textLogga'> Kinesisk restaurang och steakhouse</p>
                </div>

                <div className = 'huvudmeny'>
                    <ul> 
                    <li><a href = 'meny.html'> Meny </a> </li>
                    <li><a href = 'oppettider.html'> Öppettider </a></li>
                    <li><a href = 'om oss.html'> Om oss </a></li>
                    <li><a href = 'boka.html' > Boka </a></li>
                    </ul>
                </div>

            </head>
        )
    }
}

export default Header;