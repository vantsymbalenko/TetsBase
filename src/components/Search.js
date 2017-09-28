import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component{
    console(){
        console.log(this);
    }
    render(){
        console.log(this.props.searchCat);

        return(
            <div>
                <h2> Search Results</h2>
                {this.props.searchCat.map((item,index) => {
                    // console.log(item);
                    // console.log('category = ' + item.category);
                    // console.log('test = ' + item.test);
                    // console.log('search = ' + item.search);

                    return (
                        <li key = {index}><Link to = {"/test/"+item.categoryId +"/"+item.testId}>{item.testTitle}</Link></li>
                    );
                })}
                {/*<h2>{this.props.searchCat.map((item,i) => {*/}
                    {/*return (<li key = {i}><Link*/}
                        {/*to = '/test/2'*/}
                        {/*value = {item}*/}
                        {/*onClick = {() => {*/}
                            {/*console.log(this);*/}
                        {/*}}*/}
                    {/*>{item}</Link></li>);*/}
                {/*})}</h2>*/}
            </div>
        );
    }
}