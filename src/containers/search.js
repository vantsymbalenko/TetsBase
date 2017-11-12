import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';

import jsonData from '../json/file.json';
import '../css/search.css';

class search extends Component{
    render(){
        return(
            <div>
                <h1> Search Results</h1>
                <div className = "searchResults">
                    <Search searchResults = {this.props.searchResults}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let keys = [];
    const testList = jsonData.categories;
    testList.map((item,index) => {
       for( let i=1;i<item.length;i++){
           if(item[i][0].includes(state.search.words)){
               keys.push({
                   categoryId: index,
                   testId: i,
                   testTitle: item[i][0]
               });
           }
       }
       return null;
    });
    return {
        searchResults: keys
    }
}

export default connect(mapStateToProps)(search);
