import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';

import './GifApp.css';

import GifList from '../Gifs/GifList'
import SearchBar from '../SearchBar/SearchBar'
import SelectedGif from '../Gifs/SelectedGif'

class GifApp extends Component {
    state = {
        searchBarInput: "",
        gifListResults: [],
        selectedGif: {}
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
        const searchInput = this.state.searchBarInput
            ? this.state.searchBarInput
            : "hello";

        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}&limit=21&offset=0&rating=g&lang=en`
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

    handleSelectedGif = (chosenGif) => {
        this.setState({ ...this.state, selectedGif: chosenGif });
    }

    handleToggleSelectedGif = () => {
        this.setState({ ...this.state, selectedGif: {} });
    }

    render() {
        return (
            <div className="box">
                <SearchBar className="searchbar" addSearchInput={this.handleAddSearchBarInputToAppState} />

                <div>
                    {this.state.selectedGif && (
                        <SelectedGif selected={this.state.selectedGif.images} />
                    )}

                    {this.state.selectedGif.images && (
                        <Button className="searchbar-button" variant="primary" onClick={() => this.handleToggleSelectedGif()}>Remove Selected Gif</Button>
                    )}
                </div>

                <div>
                    {this.state.gifListResults.length ? (
                        <GifList
                            gifResults={this.state.gifListResults}
                            selectGifClick={this.handleSelectedGif} />
                    ) : (
                        "Loading data from giphy..."
                    )}
                </div>
            </div>
        )
    }
}

export default GifApp
