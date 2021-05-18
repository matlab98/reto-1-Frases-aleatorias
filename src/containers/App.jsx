import React, { Component } from "react";
import { render } from "react-dom";


import styled, { css } from 'styled-components';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

import Phrase from '../components/Phrase';
import Social from '../components/Social';
import phrase from '../utils/phrase.json';

import '../styles/format.css';

const StyledContainer = styled(Container)`
    padding: 25% 50% 25%;
    @media (min-width: 320px) and (max-width: 480px) {
    padding: 70% 15% 100% 75%;
    }
`;

const StyledCard = styled(Jumbotron)`
    border-radius: 3px;
    position: relative;
    width: 650px;
    padding: 40px 50px;
    background-color: #fff;
    top: 50%;
    left: 50%; 
    margin-top: -200px; 
    margin-left: -300px; 
    @media screen and (max-width: 480px) {
    top: 35%;
    left: 100%;
    width: auto;
    }
`;
class App extends Component {

    constructor() {
        super();
        this.state = {
            quotes: [{}]
        };
    };

    randomPhrase = () => {
        const numRandom = Math.round(Math.random() * phrase.length);
        this.setState({
            quotes: [phrase[numRandom]]
        })
    };

    componentDidMount() {
        this.randomPhrase()
    };

    render() {
        console.log(this.state.quotes)
        return (
            <div id="quote-box">
            <StyledContainer style={{
                backgroundColor: `rgb(237, 187, 153)`
            }}>
                <StyledCard fluid style={{ color: `${this.state.color}` }} id="quote-box">
                    <Phrase quote={this.state.quotes} />

                    <Social quote={this.state.quotes} />
                    <Col style={{ textAlign: "right" }}>
                        <a className="btn" id="new-quote" style={{ backgroundColor: `rgb(237, 187, 153)`, borderColor: `rgb(237, 187, 153)` }}
                        onClick={this.randomPhrase}>New quote</a>
                    </Col>
                </StyledCard>
            </StyledContainer>
            </div>
        );
    }
}

export default App;
