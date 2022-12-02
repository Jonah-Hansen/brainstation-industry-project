import { useEffect, useRef, useState } from 'react';
import './App.scss';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Results from './components/Results/Results';

function App() {

  const modalRef = useRef()

  return (
    <>
      <Header />
      <Results />
      <Footer />
      <AccessibilityButton modalRef={modalRef} />
      <Modal modalRef={modalRef} />
    </>
  );
}

export default App;
