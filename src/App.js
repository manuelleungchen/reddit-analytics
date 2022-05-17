import logo from './logo.svg';
import styles from './App.module.css';

// Importing App Components
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Heatmap from './components/Heatmap/Heatmap';
import Postslist from './components/Postslist/Postslist';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Header />
            <main className={styles.container}>
                <section id='search'>
                    <h2>Find the best time for a subreddit</h2>

                    <SearchBar />
                    {/* <Heatmap /> */}
                    <Postslist />
                </section>
                <section className={styles.section} id='howItWorks'>
                    <h2>How does it work</h2>
                    <ul>
                        <li>We find the 500 top posts from the past year for a subreddit.</li>
                        <li>The data is visulized in a heatmap grouped by weekday and hour of the day.</li>
                        <li>See immediately when to submit your reddit post.</li>
                    </ul>
                </section>
                <section className={styles.section} id='about'>
                    <h2>About</h2>
                    <p>This app was created with the goal to implement a pixel-perfect real-world
                        application with proffessional workflows and tools like Asana, Github, Canva,
                        Figma, and Visual Studio Code.</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
