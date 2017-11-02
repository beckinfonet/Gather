import React, {Component} from 'react';

import {EventCards} from './eventCards/eventCards.js';



export class ExploreSearch extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            searchFilter: "Name",
            searchField: 0,
        }

        this.updateSearchText = this.updateSearchText.bind(this);
        this.updateSearchFilter = this.updateSearchFilter.bind(this);
        this.updateSearchField = this.updateSearchFilter.bind(this);
    }

updateSearchText(val){
        this.setState({searchText: val})
    }

updateSearchFilter(val){
        this.setState({searchFilter: val})
    }

updateSearchFieldEvent(){
        this.setState({searchField: 0})
    }

updateSearchFieldGroup(){
        this.setState({searchField: 1})
    }


    render(){
        
        if(this.state.searchField === 0){
            return(
                <div>
                <input type="text" placeholder="Search" onChange={(e) => this.updateSearchText(e.target.value)}/>
                <select onChange={(e) => this.updateSearchFilter(e.target.value)}>
                    <option value="Name">Name</option>
                    <option value="Location">Location</option>
                    <option value="Category">Category</option>
                    <option value="Group-Events">Group Events</option>
                </select>
                <button onClick={(e) => this.updateSearchFieldEvent()}>Events</button>
                <button onClick={(e) => this.updateSearchFieldGroup()}>Group</button>
                <EventCards searchFilter={this.state.searchFilter} searchText={this.state.searchText}/>
                </div>
                )
        }else{
            return(
                <div>
                <input type="text" placeholder="Search" onChange={(e) => this.updateSearchText(e.target.value)}/>
                <select onChange={(e) => this.updateSearchFilter(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="location">Location</option>
                    <option value="category">Category</option>
                    <option value="group-events">Group Events</option>
                </select>
                <button onClick={(e) => this.updateSearchFieldEvent()}>Events</button>
                <button onClick={(e) => this.updateSearchFieldGroup()}>Group</button>
                <p>GROUP COMPONENT</p>
                </div>
            )
        }           
}
}