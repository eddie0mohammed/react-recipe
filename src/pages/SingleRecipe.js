import React, { Component } from 'react';

// import {recipeData} from '../data/tempDetails';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SingleRecipe extends Component {

    constructor(props){
        super(props);
        const id = this.props.match.params.id;
        this.state = {
            recipe: {},
            id: id,
            loading: true,
        }
        
    }

    

    async componentDidMount(){
        const url = `https://cors-anywhere.herokuapp.com/https://food2fork.com/api/get?key=${process.env.REACT_APP_API_KEY}&rId=${this.state.id}`;
        try{
            const res = await axios.get(url);
            // console.log(res.data);
            this.setState({
                recipe: res.data.recipe,
                loading: false
            });
        }
        catch(err){
            console.log(err);
        }

    }

    render() {
        if (this.state.loading){
            return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <h2 className="text-uppercase text-orange text-center">loading recipe...</h2>
                    </div>
                </div>
            </div>
            )
        }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Link to="/recipes" className="btn btn-warning mb-5 text-capitalize"> back to recipes list</Link>
                        <img src={this.state.recipe.image_url} alt="receipe" className="d-block w-100" style={{maxHeight: "30rem" }}/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                       <h6 className="text-uppercase">{this.state.recipe.title}</h6>
                       <h6 className="text-warning text-capitalize text-slanted">provided by {this.state.recipe.publisher}</h6>
                       <a href={this.state.recipe.publisher_url} className="btn btn-primary mt-2 text-capitalize" rel="noopener noreferrer" target="_blank">publisher webpage</a> 
                       <a href={this.state.recipe.source_url} className="btn btn-success mt-2 mx-2 text-capitalize" rel="noopener noreferrer" target="_blank">recipe url</a> 
                        <ul className="list-group mt-4">
                            <h2 className="mt-3 mb-4">Ingredients</h2>
                            {this.state.recipe.ingredients.map(item => {
                                return (
                                    <li key={Math.random()} className="list-group-item text-slanted">{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
       
    }
}
export default SingleRecipe;