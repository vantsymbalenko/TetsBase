import React, { Component } from 'react';
import { GoogleMapComponent } from './GoogleMapComponent';
import '../../css/map.css';

export default class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="about-item offer">
                    <h2>What it is?</h2>
                    <p className="item-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ab aperiam commodi debitis doloremque doloribus, earum est eum
                        hic id inventore ipsa natus necessitatibus officia quas quidem quis rerum suscipit vel?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aliquam aut consequatur eius impedit neque reprehenderit sint totam.
                        Accusantium asperiores blanditiis distinctio fugiat ipsam laboriosam maxime natus
                        omnis pariatur, tempora temporibus.
                    </p>
                </div>
                <div className="about-item our-mission">
                        <h2>Our mission</h2>
                        <p className="item-text our-mission-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab aperiam commodi debitis doloremque doloribus, earum est eum
                            hic id inventore ipsa natus necessitatibus officia quas quidem quis rerum suscipit vel?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam aut consequatur eius impedit neque reprehenderit sint totam.
                            Accusantium asperiores blanditiis distinctio fugiat ipsam laboriosam maxime natus
                            omnis pariatur, tempora temporibus.
                        </p>
                </div>
                <div className="about-item where-we">
                    <h2>Where we are?</h2>
                    <GoogleMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIw-6bNH2AUPsscyQa7iwzZ3EdO7Rujjc&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `400px` }} />}
                        containerElement={<div style={{ height: `300px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        );
    }
}