import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import AppShowcase from './components/AppShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Benefits />
        <AppShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;