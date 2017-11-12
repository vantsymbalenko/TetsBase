import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SingIn from '../components/SingIn';

import setAccess from '../action/setAccess';
import setAccessFB from '../action/setAccessFB';
import setLoading from '../action/setLoading';

import { Facebook } from '../else/mixinsFacebook';

class singIn extends Component{
    constructor(props){
        super(props);
        Facebook.doLogin = Facebook.doLogin.bind(this);
    }
    render(){
        const loading = this.props.authData.loading ? <p>Please wait</p> : null;
        return(
            (this.props.authData.access) ?
                (<SingIn
                    setAccess = {this.props.setAccess}
                    errors = {this.props.authData.errors}
                    checkFBLogin = { Facebook.doLogin }
                    loading = {loading}
                /> )
                : (<Redirect to = {{pathname : '/'}}/>)
        );
    }
}

function mapStateToProps(state){
    return{
        authData    : state.authData
    }
}

function mapDispatchToProps(dispatch) {
    return{
        setAccess: bindActionCreators(setAccess, dispatch),
        setAccessFB: bindActionCreators(setAccessFB,dispatch),
        loading: bindActionCreators(setLoading,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(singIn);
