import { useEffect, useState } from 'react';
import './App.scss';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Results from './components/Results/Results';

function App() {

  const [enabledFeatures, setEnabledFeatures] = useState({
    ADHD: false, Bionic: false, Blind: false, Cognitive: false, Seizure: false, Vision: false, Title: [false, undefined], Dark: false, Light: false, Content: false, Adjust: false, Highlight: false, Text: false
  })

  const [isModal, setIsModal] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.scrollTo(0, scroll)
  },)

  return (
    <>
      {!isModal &&
        <>
          <Header />
          <Results />
          <Footer />
          <AccessibilityButton setIsModal={setIsModal} setScroll={setScroll} />
        </>}

      {isModal &&
        <Modal scroll={scroll} setIsModal={setIsModal} enabledFeatures={enabledFeatures} setEnabledFeatures={setEnabledFeatures} />}
    </>
  );
}

export default App;
