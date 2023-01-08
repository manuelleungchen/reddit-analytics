import React, { useState } from 'react';
import Heatmap from '../Heatmap/Heatmap';
import HeatmapMobile from '../HeatmapMobile/Heatmap';
import Postslist from '../Postslist/Postslist';
import styles from './Home.module.css';
import useWindowDimensions from '../useWindowDimensions';
import { useQuery } from 'react-query';

function SearchSection() {
    const [subredditSearch, setSubredditSearch] = useState("");  // Store the current subreddit in the searchbar
    const [lastSearch, setLastSearch] = useState("");    // Store last subreddit searched


    const [alertBox, setAlertBox] = useState(false);

    const fetchTopPosts = async () => {
        // Fetch the top posts (MAX 100) on selected subreddit
        const res = await fetch(`https://www.reddit.com/r/${subredditSearch}/top.json?limit=100&t=all`);
        console.log("fetching data")
        return res.json();
    }

    const { isIdle, isLoading, isError, error, data, refetch, isFetching } = useQuery('posts', fetchTopPosts,
        {
            enabled: false
        }, 
        {
            // ⚠️ looks good, but is maybe _not_ what you want
            onError: (error) =>
              console.log(`Something went wrong: ${error.message}`),
          }
    );

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        setSubredditSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        if (subredditSearch.length < 3) {
            setAlertBox(true);
        }

        // Only refetch data when subreddit name is 3 or more characters long and wasnt use lastly
        else if ((subredditSearch.length >= 3) && (subredditSearch !== lastSearch)) {
            setAlertBox(false);
            setLastSearch(subredditSearch)
            refetch();
        }
    };

    const toggleAlert = () => {
        setAlertBox(false);
    }
    const deviceSize = useWindowDimensions();

    return (
        <section id='search'>
            {alertBox && <div className={styles.alert}>
                <span className={styles.closebtn} onClick={toggleAlert}>&times;</span>
                <p><strong>Warning!</strong> Please enter a subreddit. Subreddit should be 3 or more characters long.</p>
            </div>}
            <h2>Find the best time for a subreddit</h2>

            <form id='form' role={"search"} className={styles.searchbar} onSubmit={handleFormSubmit}>
                <span>r/</span>
                <input type="search" name='q' placeholder='Enter a subreddit' aria-label='Search and analyze a subreddit' className={styles.searchbarInput} value={subredditSearch} onChange={handleInputChange} ></input>
                <button className={styles.button} onClick={handleFormSubmit}>
                    <span className='sr-only'>Search</span>
                    <svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                </button>
            </form>

            {isIdle ? (
                ''
            ) : isLoading ? (
                <span>Loading ...</span>
            ) : isError ? (
                <div className={styles.alert}>
                    <span className={styles.closebtn} onClick={toggleAlert}>&times;</span>
                    <p><strong>Danger!</strong> The subreddit &ldquo;{subredditSearch}&rdquo; doesnt exist. Please try another subreddit.</p>
                </div>
            ) : (
                <>
                    {/* If device width is greater than 920 px, show desktop version of heatmap. Otherwise show mobile heatmap */}
                    {deviceSize.width > 920 ? <Heatmap data={data} /> : <HeatmapMobile data={data} />}
                    {/* <HeatmapMobile data={data} /> */}

                    {/* Pass the day of the week and time of day from the top posts */}
                    <Postslist data={data} />
                </>
            )}

        </section>
    )
}

export default SearchSection