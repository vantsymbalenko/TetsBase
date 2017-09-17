import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Submenu from '../../containers/menu/submenu';
// import jsonData from '../../json/file.json';
import '../css/menu.css'
// import TopContent from '../../containers/body/topContent'

export default class Menu extends Component{
    constructor(props){
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    render(){
        return(
            <ul >
                <li><Link to = '/'>Home</Link></li>
                {/*<li><Link to = '/about'>About</Link></li>*/}
                {/*<li className="menu-with-submenu">*/}
                    {/*<Link to = '/cate'>Categories</Link>*/}
                    {/*<ul className="submenu">*/}
                        {/*<li><Link to = '/cate/subCate1'>Subcate1</Link></li>*/}
                        {/*<li><Link to = '/cate/subCate2'>Subcate2</Link></li>*/}
                        {/*<li><Link to = '/cate/subCate3'>Subcate3</Link></li>*/}
                    {/*</ul>*/}
                {/*</li>*/}
                {this.props.logIn}
            </ul>
        );
    }
}

