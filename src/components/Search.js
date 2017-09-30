import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component{
    render(){
        console.log(this.props.searchCat);

        return(
            <div>
                <h2> Search Results</h2>
                {this.props.searchCat.map((item,index) => {
                    return (
                        <li key = {index}>
                            <Link to = {"/test/"+item.categoryId +"/"+item.testId}>
                                {item.testTitle}
                            </Link>
                        </li>
                    );
                })}
            </div>
        );
    }
}