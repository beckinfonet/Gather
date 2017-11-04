import React, {Component} from 'react';

import axios from 'axios';

import './groupCards.css';
import '../../../../../helpers.css'

import {Link} from 'react-router-dom'



export class GroupCards extends Component{
    constructor(props){
        super(props);

        this.state = {
            groups: [],
            searchFilter: "name",
            searchText: "",
            searchField: 1
        }

        this.componentWillMount = this.componentWillMount.bind(this);


    }

    componentWillReceiveProps(props){
        this.setState({searchFilter: props.searchFilter, searchText: props.searchText})
        
    }

    componentWillMount(){
        axios.get('/api/groups').then(result => 
            this.setState({groups: result.data}))   

        // axios.get('/api/groups/members/:id').then(result =>{
        //     console.log('group members', result)
        // })
            
        };

    shouldComponentUpdate(newProps, newState){
        
        const updatePropsText = this.props.searchText !== newProps.searchText;
        const updatePropsFilter = this.props.searchFilter !== newProps.searchFilter;
        
        return !updatePropsText || !updatePropsFilter;
    }
    
    render(){
        
        const {searchText, searchFilter} = this.props;
                if(searchText !== "" && searchFilter === "name"){
                    return(
                        <div>{this.state.groups.map(function(key){
                            if(key.name.toLowerCase().includes(searchText.toLowerCase())){
                            
                            return(
                                <div className="group-card-container">
                                <div className="group-card-image">
                                    <img src={key.group_picture} alt="image"/>
                                </div>
                                <div className="group-card-content">
                                    <div>
                                        <Link to = {`/groups/${key.id}`}><p className="group-card-name">{key.name}</p></Link>
                                    </div>
                                    <div>
                                        {key.category}
                                    </div>
                                    <div>
                                        {key.number_of_members} Member(s)
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        })}
                        </div>
                    )
                }
                else if(searchText !== "" && searchFilter === "location"){
                    
                    return(
                        <div>{this.state.groups.map(function(key){
                            if(key.location.toLowerCase().includes(searchText.toLowerCase())){
                                
                            return(
                                <div className="group-card-container">
                                <div className="group-card-image">
                                    <img src={key.group_picture} alt="image"/>
                                </div>
                                <div className="group-card-content">
                                    <div>
                                        <Link to = {`/groups/${key.id}`}><p className="group-card-name">{key.name}</p></Link>
                                    </div>
                                    <div>
                                        {key.category}
                                    </div>
                                    <div>
                                        {key.number_of_members} Member(s)
                                    </div>
                                </div>
                            </div>
                            )
                        }
                        })}
                        </div>
                    )
                }
                else if(searchText !== "" && searchFilter === "category"){
                    
                    return(
                        <div>{this.state.groups.map(function(key){
                            if(key.category.toLowerCase().includes(searchText.toLowerCase())){
                                
                            return(
                                <div className="group-card-container">
                                <div className="group-card-image">
                                    <img src={key.group_picture} alt="image"/>
                                </div>
                                <div className="group-card-content">
                                    <div>
                                        <Link to = {`/groups/${key.id}`}><p className="group-card-name">{key.name}</p></Link>
                                    </div>
                                    <div>
                                        {key.category}
                                    </div>
                                    <div>
                                        {key.number_of_members} Member(s)
                                    </div>
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
                    <div>{this.state.groups.map(function(key){
                        
                        return(
                            <div className="group-card-container">
                                <div className="group-card-image">
                                    <img src={key.group_picture} alt="image"/>
                                </div>
                                <div className="group-card-content">
                                    <div>
                                        <Link to = {`/groups/${key.id}`} className="group-card-name nunito-text"><p >{key.name}</p></Link>
                                    </div>
                                    <div>
                                        {key.category}
                                    </div>
                                    <div>
                                        {key.number_of_members} Member(s)
                                    </div>
                                </div>
                            </div>
                        )
                    })}</div>
                )
                    }
}
}