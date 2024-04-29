import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <p>Kontakt:</p>
                <p>Tel: 090-13 97 00</p>
                <p>Renmarkstorget 12,</p>
                <p>903 66 Umeå</p>
                <p> Dokumentet ändrades senast <span id = 'changes'></span>.</p>
            </footer> 
        )
    }
}
export default Footer;