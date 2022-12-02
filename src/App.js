import { useEffect, useState } from 'react';
import './App.scss';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton';
import Confirm from './components/Confirm/Confirm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Modal from './components/Modal/Modal';
import Results from './components/Results/Results';

function App() {

  const [enabledFeatures, setEnabledFeatures] = useState({
    ADHD: false, Bionic: false, Blind: false, Cognitive: false, Seizure: false, Vision: false, Title: [false, undefined], Dark: false, Light: false, Content: false, Adjust: false, Highlight: false, Text: false
  })

  const [oldFeatures, setOldFeatures] = useState({})

  const [isModal, setIsModal] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.scrollTo(0, scroll)
    if (enabledFeatures.Title[0]) {
      const h2s = document.querySelectorAll('h2')
      h2s.forEach(h2 => h2.style.color = enabledFeatures.Title[1])
    } else document.querySelectorAll('h2').forEach(h2 => h2.removeAttribute('style'))

  }, [enabledFeatures, scroll])

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
        <Modal scroll={scroll} setIsModal={setIsModal} setIsConfirm={setIsConfirm} enabledFeatures={enabledFeatures} setEnabledFeatures={setEnabledFeatures} setOldFeatures={setOldFeatures} />}

      {isConfirm &&
        <Confirm setIsConfirm={setIsConfirm} oldFeatures={oldFeatures} setEnabledFeatures={setEnabledFeatures} enabledFeatures={enabledFeatures} />
      }
    </>
  );
}

export default App;
