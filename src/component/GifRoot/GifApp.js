import React, { Component } from 'react';
import axios from 'axios';

import GifList from '../Gifs/GifList'
import SearchBar from '../SearchBar/SearchBar'

class GifApp extends Component {
    state = {
        searchBarInput: "",
        gifListResults: [],
    }

    //Lifecyle method that executes when the application first renders.
    componentDidMount() {
        this.handleSearchForGif();
    }
    
    // Lifecycle method that executes when the application state is updated.
    componentDidUpdate(prevState) {
        if (this.state.searchBarInput !== prevState.searchBarInput) {
            this.handleSearchForGif();
        }
    }

    // Function handler that makes an api call to fetch gifs.
    // The gif results are the updated when the call is made.
    handleSearchForGif = () => {
        const API_KEY = "P5GdPUaFvBJoxcSLg9DH11iZRBrpbv5t";
        const searchInput = this.state.searchBarInput;

        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=25&offset=0&rating=g&lang=en`
            )
            .then((gifResults) => {
                //console.log(gifResults)
                this.setState({
                    ...this.state,
                    gifListResults: gifResults.data.data
                });
            })
            .catch((error) => console.error(`Something went wrong: ${error} `));
    };

    handleAddSearchBarInputToAppState = (searchInput) => {
        this.setState({ ...this.state, searchBarInput: searchInput });
    };

    render() {
        return (
            <div>
                <h1> Gif</h1>
                <SearchBar addSearchInput={this.handleAddSearchBarInputToAppState} />
                <GifList gifResults={this.state.gifListResults} />
            </div>
        )
    }
}

export default GifApp
