import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class Recipe extends Component {
    render() {
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{height: '100%'}}>
                    <img src={this.props.recipe.image_url} style={{height: '14rem'}} className="img-card-top" alt="recipe"/>
                    
                    <div className="card-body text-capitalize">
                        <h6>{this.props.recipe.title}</h6>
                        <h6 className="text-warning text-slanted">provided by {this.props.recipe.publisher}</h6>
                    </div>
                    <div className="card-footer">
                        <Link to={`/recipes/${this.props.recipe.recipe_id}`} className="btn btn-primary text-capitalize">details</Link>
                        <a href={this.props.recipe.source_url} target='_blank' rel="noopener noreferrer" className="btn btn-success mx-2 text-capitalize">Recipe URL</a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Recipe;