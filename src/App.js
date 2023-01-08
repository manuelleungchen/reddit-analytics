import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from './App.module.css';

// Importing App Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/sections/Home';
import HowItWorks from './components/sections/HowItWorks';

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Header />
                <main className={styles.container}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/how-it-works" element={<HowItWorks />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </QueryClientProvider>
    );
}

export default App;
