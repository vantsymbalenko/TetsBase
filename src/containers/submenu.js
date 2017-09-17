import React, { Component } from 'react'
import Submenu from '../components/Submenu'

export default class submenu extends Component{
    render(){
        return(
            <Submenu categories = {this.props.categories}/>
        );
    }
}