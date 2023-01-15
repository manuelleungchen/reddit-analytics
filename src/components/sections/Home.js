import React, { useState, useEffect } from 'react';
import Heatmap from '../Heatmap/Heatmap';
import HeatmapMobile from '../HeatmapMobile/Heatmap';
import Postslist from '../Postslist/Postslist';
import Loader from '../Loader/Loader';
import styles from './Home.module.css';
import useWindowDimensions from '../useWindowDimensions';
import { useQuery } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchSection() {
    const [subredditSearch, setSubredditSearch] = useState("");  // Store the current subreddit in the searchbar
    const [lastSearch, setLastSearch] = useState("");    // Store last subreddit searched

    const fetchTopPosts = async () => {
        // Fetch the top posts (MAX 100) on selected subreddit
        const res = await fetch(`https://www.reddit.com/r/${subredditSearch}/top.json?limit=100&t=all`);
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json();
    }

    const { isFetching, data, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchTopPosts,
        enabled: false,
        onError: (error) => {
            toast.error(`Subreddit "${subredditSearch}" does not exist. Please try another subreddit.`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    });

    const handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        setSubredditSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior
        event.preventDefault();
        if (subredditSearch.length < 3) {
            toast.warn('Subreddit name should be 3 or more characters long.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        // Only refetch data when subreddit name is 3 or more characters long and wasnt use lastly
        else if ((subredditSearch.length >= 3) && (subredditSearch !== lastSearch)) {
            setLastSearch(subredditSearch)
            refetch();
        }
    };
    const deviceSize = useWindowDimensions();

    return (
        <section id='search'>
            <h2>Find the best time for a subreddit</h2>
            <form id='form' role={"search"} className={styles.searchbar} onSubmit={handleFormSubmit}>
                <span>r/</span>
                <input type="search" name='q' placeholder='Enter a subreddit' aria-label='Search and analyze a subreddit' className={styles.searchbarInput} value={subredditSearch} onChange={handleInputChange} ></input>
                <button className={styles.button} onClick={handleFormSubmit}>
                    <span className='sr-only'>Search</span>
                    <svg viewBox="0 0 1024 1024"><path className="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path></svg>
                </button>
            </form>
            <ToastContainer />

            {isFetching ? (<Loader />) : data && (
                <>
                    {/* If device width is greater than 920 px, show desktop version of heatmap. Otherwise show mobile heatmap */}
                    {deviceSize.width > 920 ? <Heatmap data={data} /> : <HeatmapMobile data={data} />}

                    {/* Pass the day of the week and time of day from the top posts */}
                    <Postslist data={data} deviceSize={deviceSize} />
                </>
            )}

        </section>
    )
}

export default SearchSection