import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const StyledQuoteText = styled.div`
    font-family: "Raleway", sans-serif;
    text-align: center;
    height: auto;
    font-weight: 500;
    font-size: 1.75em;
`;

const StyledQuoteAuthor = styled.div`
font-family: "Raleway", sans-serif;
text-align: right;
height: auto;
font-weight: 400;
font-size: 1em;
padding-top: 20px;
`;

class Phrase extends Component {

    constructor() {
        super();
        this.state = {
            phrase: "",
            author: ""
        };
    }

    render() {
        const { quote } = this.props;
        return (
            <div id="quote-box">
                {
                    quote.map((item) => {
                        return (
                            <Container>
                                <StyledQuoteText id="text">
                                    <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
                                    <span>
                                        {item.phrase}
                                    </span>
                                </StyledQuoteText>
                                <StyledQuoteAuthor id="author">
                                      - {item.author}
                                </StyledQuoteAuthor>
                            </Container>
                        )
                    })
                }
            </div>
        );
    }
}

export default Phrase