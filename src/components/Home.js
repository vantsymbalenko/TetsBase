import React, { Component } from 'react';
import '../css/home.css';

export default class Home extends Component{
    render(){
        return(
            <div className="box">
                <section className="section-gradient">
                    <h1>Test your skill</h1>
                    <p>
                        <span>WebsiteName</span>
                        it easy way to check your knowledge in all spheres of our life and achive result
                    </p>
                </section>
            </div>
        );
    }
}