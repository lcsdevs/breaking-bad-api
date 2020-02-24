import React, { Component } from 'react';
import SearchAppBar from "./components/app-bar/SearchAppBar";
import Characters from "./components/characters";
import {Container,Row,Col} from 'reactstrap';

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
            <>
                <SearchAppBar/>
                       <Col><Characters characters={this.state.characters} /></Col>
                </>
        )
    }
}

export default App;