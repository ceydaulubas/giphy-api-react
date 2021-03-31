import React, { useState } from 'react'
import './SearchBar.css'

// import { Button, InputGroup, FormControl } from 'react-bootstrap';
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
            {/* <InputGroup className="justify-content-md-center">
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"

                    placeholder="Search for gif here..."
                    type="text"
                    name="search"
                    value={searchState.userInput}
                    onChange={handleInputChange}
                /> 
                <Button variant="secondary" type="submit">Find GIF</Button>
            </InputGroup> */}
            <input
                type="text"
                name="fname"
                value={searchState.userInput}
                onChange={handleInputChange}
                placeholder="Search for gif here..."
            />
                <button 
                type="submit">Find GIF</button>
        </form>
    )

}

export default SearchBar
