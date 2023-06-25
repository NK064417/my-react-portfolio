import React from 'react';
import Hearder from './components/hearder/Hearder';
import Nav from './components/nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Hearder />
      <Nav />
      <About />
      <Experience />
      <Contacts />
      <Footer />
    </React.Fragment>
  );
};

export default App;
