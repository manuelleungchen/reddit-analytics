import logo from './logo.svg';
import styles from './App.module.css';

// Importing App Components
import Header from './components/Header/Header';
import Button from './components/Button/Button';
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
                    <Button />
                    <Heatmap />
                    <Postslist />
                </section>
                <section id='howItWorks'>
                    <h2>How does it work</h2>
                    <ul>
                        <li>We find the 500 top posts from the past year for a subreddit.</li>
                        <li>The data is visulized in a heatmap grouped by weekday and hour of the day.</li>
                        <li>See immediately when to submit your reddit post.</li>
                    </ul>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi earum harum, corrupti itaque molestias beatae blanditiis sint ea assumenda, quam aliquam aperiam non animi, maxime voluptate? Voluptatibus commodi quo tempora?
                </section>
                <section id='about'>
                    <h2>About</h2>
                    <p>This app was created with the goal to implement a pixel-perfect real-world
                        application with proffessional workflows and tools like Asana, Github, Canva,
                        Figma, and Visual Studio Code.</p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eveniet reprehenderit corporis. Hic facilis dolores fuga, adipisci ullam aliquam eius voluptatum incidunt vel! Omnis totam deleniti, adipisci impedit cumque at?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores obcaecati quos, labore adipisci illo voluptatem accusantium commodi tenetur, ex nulla quaerat similique quia non velit ab iure magnam dignissimos.
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
