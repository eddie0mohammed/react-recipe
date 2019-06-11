import React, { Component } from 'react';

import Recipe from '../Recipe/Recipe';

class RecipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">recipe list</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className="row">
                        {this.props.recipes.map(recipe => (
                            <Recipe key={recipe.recipe_id} recipe={recipe}/>
                            
                        ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RecipeList;