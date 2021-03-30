import React, { Component } from 'react';
import axios from 'axios';

import GifList from '../Gifs/GifList'

class GifApp extends Component {
    state = {
        gifListResults: [],
    }

    //Lifecyle method that executes when the application first renders.
    componentDidMount() {
        this.handleSearchForGif();
    }

    // Function handler that makes an api call to fetch gifs.
    // The gif results are the updated when the call is made.
    handleSearchForGif = () => {
        const API_KEY = "P5GdPUaFvBJoxcSLg9DH11iZRBrpbv5t";
        // const searchInput=this.state.searchBarInput ? this.state.searchBarInput : "thanks" ;

        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=hello&limit=25&offset=0&rating=g&lang=en`
            )
            .then((gifResults) => {
                console.log(gifResults)
                this.setState({
                    ...this.state,
                    gifListResults: gifResults.data.data
                });
            })
            .catch((error) => console.error(`Something went wrong: ${error} `));
    };

    render() {
        return (
            <div>
                <h1> Gif</h1>
                <GifList  gifResults={this.state.gifListResults} />
            </div>
        )
    }
}

export default GifApp
