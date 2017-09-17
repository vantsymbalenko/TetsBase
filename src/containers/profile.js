import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Profile from '../components/Profile';

class profile extends Component{
    render(){
        let access = this.props.auth.access,
            name = this.props.auth.name,
            surname = this.props.auth.surname,
            regDate = this.props.auth.regDate,
            imgSrc = this.props.auth.imgSrc;
        if(access){
            return(
                <Redirect to = {{ pathname: '/'}}/>
            );
        }
        return(
              <Profile
                name = { name }
                surname = { surname }
                regDate = { regDate }
                imgSrc = { imgSrc }
              />
        );
    }
}

function mapStateToProps(state){
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(){
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(profile);
