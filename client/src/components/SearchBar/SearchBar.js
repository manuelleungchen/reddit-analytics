import React, { useState } from 'react';
import styles from './SearchBar.module.css';


function SearchBar() {

    const [subredditSearch, setSubredditSearch] = useState("");

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { value } = event.target;
        setSubredditSearch(value);
    };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        console.log(`getting subreddit data about ${subredditSearch}`)
    };
    return (
        <form id='form' role={"search"} className={styles.searchbar} >
            <input type="search" name='q' placeholder='Enter a subreddit' aria-label='Search and analyze a subreddit' className={styles.searchbarInput} value={subredditSearch} onChange={handleInputChange} />
            <button className={styles.button} onClick={handleFormSubmit}>
                <svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
            </button>
        </form>
    )
}

export default SearchBar;
