import React, { Component } from "react";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

import '../styles/format.css';

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
                                <Col>
                                    <a className="btn" style={{ backgroundColor: `rgb(237, 187, 153)`, borderColor: `rgb(237, 187, 153)`, marginRight:"5px" }}
                                        href={`https://api.whatsapp.com/send?text="${item.phrase} - ${item.author}"#quotes`} target="_blanck">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                    <a className="btn" id="tweet-quote" style={{ backgroundColor: `rgb(237, 187, 153)`, borderColor: `rgb(237, 187, 153)`, marginRight:"5px" }}
                                        href={`https://twitter.com/intent/tweet/?text="${item.phrase} - ${item.author}"&hashtags=SuperacionPersonal`} target="_blanck">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </Col>
                                
                            
                        )
                    })
                }
            </div >
        )
    }
};

export default Social;