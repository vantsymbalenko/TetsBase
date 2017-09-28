import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import setAccess from '../action/setAccess';
import setAccessFB from '../action/setAccessFB';
import setLoading from '../action/setLoading';
import { Facebook } from '../else/mixinsFacebook';
import SingIn from '../components/singIn';

class PrivateRouter extends Component{
    constructor(props){
        super(props);
        // this.checkFBLogin = this.checkFBLogin.bind(this);
        Facebook.doLogin = Facebook.doLogin.bind(this);
    }
    render(){
        const loading = this.props.auth.loading ? <p>Please wait</p> : null;
        // console.log(loading);
        return(
            (this.props.auth.access) ?
                (<SingIn
                    setAccess = {this.props.setAccess}
                    errors = {this.props.auth.errors}
                    checkFBLogin = { Facebook.doLogin }
                    loading = {loading}
                /> )
                : (<Redirect to = {{pathname : '/'}}/>)
        );
    }
}

function mapStateToProps(state){
    return{
        auth    : state.auth

    }
}
function mapDispatchToProps(dispatch) {
    return{
        setAccess: bindActionCreators(setAccess, dispatch),
        setAccessFB: bindActionCreators(setAccessFB,dispatch),
        loading: bindActionCreators(setLoading,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
