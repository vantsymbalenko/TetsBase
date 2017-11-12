import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Profile from '../components/Profile';

class profile extends Component{
    render(){
        let access = this.props.authData.access,
            name = this.props.authData.name,
            surname = this.props.authData.surname,
            birthDate = this.props.authData.birthDate,
            userPhotoSrc = this.props.authData.imgSrc,
            coverPhotoSrc = this.props.authData.cover;
        if(access){
            return(
                <Redirect to = {{ pathname: '/'}}/>
            );
        }
        return(
              <Profile
                name = { name }
                surname = { surname }
                birthDate = { birthDate }
                userPhotoSrc = { userPhotoSrc }
                coverPhotoSrc = { coverPhotoSrc }
              />
        );
    }
}

function mapStateToProps(state){
    return{
        authData: state.authData
    }
}

export default connect(mapStateToProps)(profile);

