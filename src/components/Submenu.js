import React, { Component } from 'react';
import '../css/submenu.css';

export default class Submenu extends Component {
    render(){
        return (
            <ul className="submenu">
                {
                    this.props.categories.map((elem, index) => {
                        return <li key = {index} ><a href="">{elem}</a></li>
                    })
                }
            </ul>

        );
    }
}