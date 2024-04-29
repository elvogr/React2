import React from 'react';
import Slideshow1 from './slideshow1.jpg';
import Slideshow2 from './slideshow2.jpg'
import Slideshow3 from './slideshow3.jpg'



class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1
        };
    }

    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }

    plusSlides = (n) => {
        this.showSlides(this.state.slideIndex + n);
    }

    currentSlide = (n) => {
        this.showSlides(n);
    }

    showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName('alla_bilder');
        if (n > slides.length) { n = 1; }
        if (n < 1) { n = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[n - 1].style.display = 'block';
        this.setState({ slideIndex: n });
    }

    render() {
        return (
            <div className = 'container_alla_bilder'>

                <div className = 'alla_bilder'>
                    <img src = {Slideshow1}/>
                    <div className = 'bild_nummer'> 1/3 </div>
                </div>

                <div className = 'alla_bilder'>
                    <img src = {Slideshow2}/>
                    <div className = 'bild_nummer'>2/3</div>
                </div>

                <div className = 'alla_bilder'>
                    <img src = {Slideshow3}/>
                    <div className = 'bild_nummer'>3/3</div>
                </div>
                <a className = 'prev' onClick = {() => this.plusSlides(-1)} > ❮ </a>
                <a className = 'next' onClick = {() => this.plusSlides(1)} > ❯ </a>
            </div>
        );
    }
}

export default Slideshow;

