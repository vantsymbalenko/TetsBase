import React, { Component } from 'react';
// import Footer from '../containers/footer';
// import Slider from 'react-slick';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/js/bootstrap.js';
// import Img1 from '../image/artlogo.png';
// import Img2 from '../image/slide-2.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/home.css';

export default class Home extends Component{
    render(){
        // let setting = {
        //     dots: true,
        //     autoplay:true,
        //     autoplaySpeed: 3000,
        //     fade:true,
        //     infinite: true,
        //     slidesToScroll: 1,
        //     slidesToShow:1,
        //     centerMode:true,
        //     swipeToSlide:false,
        //     draggable:false
        // };
        return(
            <div className="box">
                {/*<div className="home">*/}
                   {/*<Slider {...setting}>*/}
                       {/*<div className="img-responsive slide"><img src={Img1} alt="slider-foto-1"/></div>*/}
                       {/*<div className="img-responsive slide"><img src={Img2} alt="slider-foto-2"/></div>*/}
                   {/*</Slider>*/}
                {/*</div>*/}

                <section className="section-gradient">
                    <h1>Test your skill</h1>
                    <p><span>WebsiteName</span> it easy way to check your knowledge in all spheres of our life and achive result</p>
                </section>
            </div>
        );
    }
}