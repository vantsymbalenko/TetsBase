import React, { Component } from 'react';
import Menu from '../containers/menu';
import Content from '../containers/content';

export default class RouterConfig extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <Content/>
            </div>
        );
    }
}
