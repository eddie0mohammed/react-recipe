import React, { Component } from 'react'

import Search from '../components/Search/Search';
import RecipeList from '../components/RecipeList/RecipeList';

import {recipeData } from '../data/tempList';
import axios from 'axios';

class Recipes extends Component {

    state = {
        recipes: recipeData,
        search: '',
        url: `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        base_url: `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: '&q=',
        error:''
        
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {base_url, query, search} = this.state;
        this.setState({
            url: `${base_url}${query}${search}`,
            search: ''
        }, () => this.getRecipes());
    }

    getRecipes = async () => {
        try{
            const res = await axios.get(this.state.url);
            if (res.data.recipes.length === 0){
                this.setState({
                    error: 'Sorry but your search did not return any recipes, please try again or click search for most popular recipes'
                })
            }else{
                this.setState({
                    recipes: res.data.recipes,
                    error: ''
                })


            }

            // console.log(data.data.recipes);

        }
        catch (err){
            console.log(err);
        }
    }


    componentDidMount(){
        this.getRecipes();
    }

    render() {
        return (
            <React.Fragment>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                {this.state.error ? (
                    <section>
                        <div className="row">
                            <div className="col">
                                <h2 className="text-orange text-center text-uppercase mt-5">{this.state.error}</h2>
                            </div>
                        </div>
                    </section>
                ) :
                    <RecipeList recipes={this.state.recipes} />
                }
            </React.Fragment>
        )
    }
}
export default Recipes;