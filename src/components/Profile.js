import React, { Component } from 'react';
import '../css/profile.css';

export default class Profile extends Component{
    render(){
        console.log(this.props.coverFotoSrc);
        let coverSrc = this.props.coverFotoSrc,
            userFoto = this.props.imgSrc,
            name = this.props.name,
            surname = this.props.surname,
            bithDate = this.props.regDate;
        return(
            <div className="wrapper-profile">
               <img
                   src={ coverSrc }
                   className="cover"
                   alt = "coverFoto"/>
                <img
                    src={ userFoto }
                    className="userFoto"
                    alt = "userFoto"/>
                <div className="userInfo">
                    <ul>
                        <li><span>First Name:</span> {name}</li>
                        <li><span>Last Name:</span> {surname}</li>
                        <li><span>Date of birthday:</span> {bithDate}</li>
                    </ul>
                </div>
            </div>
        );
    }
}