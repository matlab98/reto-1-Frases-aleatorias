import React, { Component } from "react";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

const StyledQuoteButton = styled.a`
    margin-right:5px;
    color:white;
    &:hover{
    color:white;
    box-shadow: inset 0px 0px 10px 0px #ffffff;
    }
`;
class Social extends Component {

    constructor() {
        super();
        this.state = {
            phrase: "",
            author: "",
            color: ""
        };
    }

    render() {
        const { quote } = this.props;
        return (

            <div>
                {
                    quote.map((item) => {
                        return (
                            <Row style={{ marginTop: "30px" }}>
                                <Col>
                                    <StyledQuoteButton className="btn" style={{ backgroundColor: ` rgb(237, 187, 153)`, borderColor: ` rgb(237, 187, 153)` }}
                                        href={`https://api.whatsapp.com/send?text="${item.phrase} - ${item.author}"#quotes`} target="_blanck">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </StyledQuoteButton>
                                    <StyledQuoteButton className="btn" id="tweet-quote" style={{ backgroundColor: ` rgb(237, 187, 153)`, borderColor: ` rgb(237, 187, 153)` }}
                                        href={`https://twitter.com/intent/tweet/?text="${item.phrase} - ${item.author}"&hashtags=SuperacionPersonal`} target="_blanck">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </StyledQuoteButton>
                                </Col>
                                <Col style={{ textAlign: "right" }}>
                                    <StyledQuoteButton className="btn" id="new-quote" style={{ backgroundColor: `rgb(237, 187, 153)`, borderColor: `rgb(237, 187, 153)` }}
                                        >New quote</StyledQuoteButton>
                                </Col>
                            </Row>
                        )
                    })
                }
            </div >
        )
    }
};

export default Social;
/**import React, { Component } from "react";

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
width: 40px;<
height: auto;
font-weight: 400;
font-size: 1em;
clear: both;
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
                                    {item.author}
                                </StyledQuoteAuthor>
                            </Container>
                        )
                    })
                }
            </div>
        );
    }
}

export default Phrase */