import React, {Component} from 'react';
import Characters from "./components/characters";
import SearchAppBar from "./components/SearchAppBar";
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            page: null,
        };

       this.getCharacter = this.getCharacter.bind(this);
    }

    getCharacter(){
        fetch(`https://www.breakingbadapi.com/api/characters`)
            .then(res => res.json())
            .then((data) => {
                this.setState({characters: data})
            })
            .catch(console.log)
    }

    componentDidMount() {
            this.getCharacter()
    }

    render() {
        return (
            <>
               <SearchAppBar/>
                <div className="App">
                    <Characters characters={this.state.characters}/>
                </div>
            </>
        )
    }

}
export default App;