import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Search extends Component{
    render(){
        let searchResults = this.props.searchResults,
            length = this.props.searchResults.length;

        if(length === 0){
            return(
                <div className = "searchValue">
                    <a>Sorry but we find nothing for you request</a>
                </div>
            );
        }

        return(
            <ul>
                {searchResults.map((item,index) => {
                    return (
                        <li key = {index} className = "searchValue">
                            <Link to = {"/test/"+item.categoryId +"/"+item.testId}>
                              {item.testTitle}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }
}