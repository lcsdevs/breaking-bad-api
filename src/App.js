import React, { Component } from 'react';
import Characters from "./components/characters";
import logo from './images/black.png';
import './App.css';
import {
    InputGroup,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Input,
     Media,
    NavbarText
} from 'reactstrap';
import Form from "reactstrap/es/Form";
import {FormControlLabel} from "@material-ui/core";

var imgStyle = {
    Width: "64px",
    Height:"64px"
};

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
                <div class="navbar-color">
                    <Navbar bg="dark">
                        <NavbarBrand >
                            <Media>
                                <Media  width="128"  height="128" object src={logo} />
                            </Media>
                        </NavbarBrand>
                            <Nav className="mr-auto" navbar>
                            </Nav>
                        <NavbarBrand>
                            <InputGroup>
                                <Input
                                    onChange={this.props.onChange}
                                    placeholder="Search..."
                                />
                            </InputGroup>
                        </NavbarBrand>
                    </Navbar>
                </div>

                <Characters characters={this.state.characters} />
        </>

        )
    }
}

export default App;