import React from "react";

export default class RecipeSearch extends React.Component {
    state = {
        recipes: [

            "Apple Pie",
            "Cherry Pie",
            "Pizza pie",
            "Hamburger",
            "Ham steak",
            "Chocolate mousse",
            "Chocolate Ice Cream"
        ],
        searchTerm: ""

    };

    render() {
        //pull out matching recipes for search term
        let matchRecipes = this.state.recipes.filter((recipe) => {
            return recipe.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase);
        });

        //comment
        let recipesList = this.state.recipes.map((recipe) => {
            return <div>recipe</div>;
        });

        console.log(recipesList);

        return (
            <div className="recipes">
                <h2>Recipes</h2>
                <input value={this.state.searchTerm} onChange={(event) => {
                    this.updateSearch(event);
                }} />
                <ul>{recipesList}</ul>
            </div>
        );
    }

    updateSearch(event) {
        this.setState({ searchTerm: event.target.value });
    }
}

