import React, { Component } from 'react';

export default class Profile extends Component{
    render(){
        return(
            <div>
                <div>
                    <img src = { this.props.imgSrc } alt = ''/>
                </div>
                <div>
                    <ul>
                        <li><span>Name:</span> {this.props.name}</li>
                        <li><span>Surname:</span> {this.props.surname}</li>
                        <li><span>Date:</span> {this.props.regDate}</li>
                    </ul>
                </div>
            </div>
        );
    }
}