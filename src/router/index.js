import React, {Component } from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routing from './Routing';
import logOut from '../action/logOut';
import setLoading from '../action/setLoading';
import setSearchWord from '../action/setSearchWord';
import { Facebook } from '../else/mixinsFacebook';

class routs extends Component{
    constructor(props){
        super(props);
        Facebook.doLogout = Facebook.doLogout.bind(this);
    }
    logoutHandler(){
        Facebook.doLogout();
    }
    onClickSearch(){
        console.log('onclicksearch');
        return (
            <Redirect to = {{ pathname: '/search'}} push/>
        )
    }
    render(){
        let logIn;
        if(!this.props.auth.access){
            logIn = [
                <li key = '1' className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">{this.props.auth.name}
                        <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/" onClick = {this.logoutHandler}>Logout</Link></li>
                    </ul>
                </li>
            ]
        } else {
            logIn = [<li key = '1'>
                        <Link to = '/singIn'>
                            <span className="glyphicon glyphicon-log-in"></span>Login
                        </Link>
                    </li>
                    ];
        }
        return(
            <Router>
              <Routing logIn = {logIn}
                       onClickSearch = {this.onClickSearch}
                       onSearch = {this.props.searchPhrase}
              />
            </Router>
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
        logOut: bindActionCreators(logOut,dispatch),
        loading: bindActionCreators(setLoading,dispatch),
        searchPhrase : bindActionCreators(setSearchWord,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(routs);