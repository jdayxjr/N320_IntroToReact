import React from "react";
import RecipeSearch from "./RecipeSearch";


export default class App extends React.Component {
    state = {
        currentProject: [<RecipeSearch />],
        curPage: 0
    };

    render() {
        <div className="App">
            <h1>Hello World</h1>
            <div>
                <button onClick={() => {
                    this.swapProject(1);
                }}
                >
                    clock
                </button>
                <button onClick={() => {
                    this.swapProject(0);
                }}
                >
                    Recipe search
                </button>
            </div>
            {this.state.pages[this.state.curPage]}
        </div>
    }

    swapProject(projectIndex) {
        this.setState({ curPage: projectIndex });
    }
}