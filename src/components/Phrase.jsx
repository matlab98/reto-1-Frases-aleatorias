import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phrase from '../utils/phrase.json'
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
width: 40px;
height: auto;
font-weight: 400;
font-size: 1em;
clear: both;
padding-top: 20px;
`;

class Phrase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phrase: "",
            author: ""
        }
    }

    randomPhrase = () => {
        const numRandom = Math.round(Math.random() * phrase.length);
        this.setState({
            phrase: phrase[numRandom]["phrase"],
            author: phrase[numRandom]["author"]
        })
    };

    componentDidMount() {
        this.randomPhrase()
    }


    render() {
        return (
            <Container>
                <StyledQuoteText id="quote">
                    <FontAwesomeIcon icon={faQuoteLeft} style={{ marginRight: "10px" }} />
                    <span>
                        {this.state.phrase}
                    </span>
                </StyledQuoteText>
                <StyledQuoteAuthor id="author">
                    {this.state.author}
                </StyledQuoteAuthor>
            </Container>
        )
    }
};

export default Phrase;
