import React, { Component } from 'react';
import Footer from '../components/Footer';

export default class footer extends Component{
    render(){
        let year = new Date().getFullYear();
        return(
            <Footer year = {year}/>
        );
    }
}
