import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {

    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data:[ 
                {title: 'Top 10 "Legend of Zelda" games', category: "game"},
                {title: "BPA Nationals 2021", category: "event"},
                {title:"About Me", category: "me"},
                {title:"DevCamp Fries", category: "me"}                
            ]
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title}/>;
        })
    }
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                <button onClick={() => this.handleFilter("game")}>
                    Games
                </button>
                <button onClick={() => this.handleFilter("event")}>
                    Events
                </button>
                <button onClick={() => this.handleFilter("me")}>
                    Me
                </button>

                {this.portfolioItems()}
            </div>
        );
    }
}