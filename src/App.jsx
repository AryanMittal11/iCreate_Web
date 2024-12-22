import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <main>
          <Hero />
          <Events />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;