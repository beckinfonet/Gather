import React, {Component} from 'react';

import axios from 'axios';

import './eventCards.css';
import '../../../../../helpers.css'

import {Link} from 'react-router-dom';

export class EventCards extends Component{
    constructor(props){
        super(props);

        this.state ={
            events: [],
            searchFilter: "name",
            searchText: "",
            searchField: 1,
        }

      this.componentWillMount = this.componentWillMount.bind(this);
    }
    
    componentWillReceiveProps(props){
        this.setState({searchFilter: props.searchFilter, searchText: props.searchText})

    }

    componentWillMount(){
        axios.get('/api/events').then(result => 
            this.setState({events: result.data}))   
        };

    shouldComponentUpdate(newProps, newState){
        
        const updatePropsText = this.props.searchText !== newProps.searchText;
        const updatePropsFilter = this.props.searchFilter !== newProps.searchFilter;

        return !updatePropsText || !updatePropsFilter;
    }
    


    render(){

        const {searchText, searchFilter} = this.props;

        if(searchText !== "" && searchFilter === "Name"){
            
            return(
                <div>{this.state.events.map(function(key){
                    if(key.title.toLowerCase().includes(searchText.toLowerCase())){
                    
                    return(

                        <div className="event-card-container">
                            <div className="event-card-date nunito-text">
                                {key.date}
                            </div>
                            <div  className="event-card-info nunito-text">
                                <div className="event-card-loc">{key.location.toUpperCase()}</div>
                                <div><Link to = {`/event/${key.id}`}>{key.title}</Link></div>
                                <div>{key.category}</div>
                                <div className="event-card-desc">{key.description}</div>
                            </div>
                            </div>
                    )
                }
                })}
                </div>
            )
        }
        else if(searchText !== "" && searchFilter === "Location"){
            
            return(
                <div>{this.state.events.map(function(key){
                    if(key.location.toLowerCase().includes(searchText.toLowerCase())){
                      
                    return(

                        <div className="event-card-container">
                            <div className="event-card-date nunito-text">
                                {key.date}
                            </div>
                            <div  className="event-card-info nunito-text">
                                <div className="event-card-loc">{key.location.toUpperCase()}</div>
                                <div><Link to = {`/event/${key.id}`}>{key.title}</Link></div>
                                <div>{key.category}</div>
                                <div className="event-card-desc">{key.description}</div>
                            </div>
                            </div>
                    )
                }
                })}
                </div>
            )
        }
        else if(searchText !== "" && searchFilter === "Category"){
            return(
                <div>{this.state.events.map(function(key){
                    if(key.category.toLowerCase().includes(searchText.toLowerCase())){
                      
                    return(

                        <div className="event-card-container">
                            <div className="event-card-date nunito-text">
                                {key.date}
                            </div>
                            <div  className="event-card-info nunito-text">
                                <div className="event-card-loc">{key.location.toUpperCase()}</div>
                                <div><Link to = {`/event/${key.id}`}>{key.title}</Link></div>
                                <div>{key.category}</div>
                                <div className="event-card-desc">{key.description}</div>
                            </div>
                            </div>

                    )
                }
                })}
                </div>
            )
        }
        else{
        return(
            <div>{this.state.events.map(function(key){
                
                return(
                    <div className="event-card-container">
                            <div className="event-card-date nunito-text">
                                {key.date}
                            </div>
                            <div  className="event-card-info nunito-text">
                                <div className="event-card-loc">{key.location.toUpperCase()}</div>
                                <div><Link to = {`/event/${key.id}`}>{key.title}</Link></div>
                                <div>{key.category}</div>
                                <div className="event-card-desc">{key.description}</div>
                            </div>
                            </div>

                )
            })}</div>
        )
            }
    }
}