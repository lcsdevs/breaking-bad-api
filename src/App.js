import React, { Component } from 'react';
import Characters from "./components/characters";

class App extends Component {
    state = {
        characters: []
    };

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/characters')
            .then(res => res.json())
            .then((data) => {
                this.setState({ characters: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Characters characters={this.state.characters} />
        )
    }
}

export default App;