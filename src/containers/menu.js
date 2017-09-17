import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import logOut from '../action/logOut';
import { Facebook } from '../else/mixinsFacebook';

class menu extends Component{
    constructor(props){
        super(props);
        Facebook.doLogout = Facebook.doLogout.bind(this);
    }
    logoutHandler(e){
        e.preventDefault();
        Facebook.doLogout();
    }
    render(){
        let logIn ;
        if(!this.props.auth.access){
            logIn = [
                <li key = '1'>Hello <Link to = '/profile'>{this.props.auth.name}</Link></li>,
                <li key = '2'><button onClick = {this.logoutHandler}>Log OUT</button></li>
            ]
        } else {
            logIn = [ <li key = '1'><Link to = '/singIn'>Sing In</Link></li> ];
        }
        return (
            <Menu logIn = {logIn}/>
        )
    }
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch){
    return{
        logOut: bindActionCreators(logOut,dispatch)
    }
}
// {/*<li key = '2'><Link to = '/logIn'>Log In</Link></li>*/}

export default connect(mapStateToProps, mapDispatchToProps)(menu);