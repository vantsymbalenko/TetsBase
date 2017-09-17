import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import About from '../../containers/about';
// import Categories from '../../containers/categories';
import PrivateRouter from '../containers/checkSingIn';
// import LogIn from '../../containers/logIn';
import Home from '../containers/home';
import Profile from '../containers/profile';

export default class Body extends Component{
    render(){
        return(
            <Switch>
                <Route exact path = '/' component = {Home}/>
                {/*<Route path = '/about' component = {About}/>*/}
                {/*<Route path = '/cate' component = {Categories}/>*/}
                <Route path = '/profile' component = {Profile}/>
                <Route path = '/singIn' component = {PrivateRouter}/>
                {/*<Route path = '/logIn' component = {LogIn}/>*/}
            </Switch>
        );
    }
}