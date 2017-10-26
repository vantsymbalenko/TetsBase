import React, { Component } from 'react';
import Search from '../components/Search';
import { connect } from 'react-redux';
import jsonData from '../json/file.json';
import '../css/search.css';

class search extends Component{
    render(){
        console.log(this.props.searchCat);
        return(
            <div>
                <h1> Search Results</h1>
                <ul className = "searchResults">
                    <Search searchCat = {this.props.searchCat}/>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    let keys = [];
    const categories = jsonData.categories;
    categories.map((item,index) => {
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
        searchCat: keys
    }
}

export default connect(mapStateToProps)(search);
