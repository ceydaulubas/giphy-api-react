import React, { useState } from 'react'

const initialState = { userInput: "" };

const SearchBar = ({ addSearchInput }) => {
    const [searchState, setSearchState] = useState(initialState);

    const handleInputChange = (event) => {
        setSearchState(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addSearchInput(searchState);
        setSearchState(initialState);
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="fname"
                value={searchState.userInput}
                onChange={handleInputChange}
            />
            <button
                type="submit">Find GIF</button>
        </form>
    )

}

export default SearchBar
