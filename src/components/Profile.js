import React, { Component } from 'react';
import '../css/profile.css';

export default class Profile extends Component{
    render(){
        let coverPhotoSrc = this.props.coverPhotoSrc,
            userPhotoSrc = this.props.userPhotoSrc,
            name = this.props.name,
            surname = this.props.surname,
            birthDate = this.props.birthDate;
        return(
            <div className="wrapper-profile">
               <img
                   src={ coverPhotoSrc }
                   className="cover"
                   alt = "coverFoto"/>
                <img
                    src={ userPhotoSrc }
                    className="userFoto"
                    alt = "userFoto"/>
                <div className="userInfo">
                    <ul>
                        <li><span>First Name:</span> {name}</li>
                        <li><span>Last Name:</span> {surname}</li>
                        <li><span>Date of birthday:</span> {birthDate}</li>
                    </ul>
                </div>
            </div>
        );
    }
}