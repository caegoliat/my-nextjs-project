import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Interests from '../components/Interests';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
};

export default Home;
