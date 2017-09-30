import React, { Component } from 'react';

export default class Home extends Component{
    render(){
        return(
            <div>
                <h3>home</h3>
                <img src = {this.props.imgSrc} alt='some' />
            </div>
        );
    }
}