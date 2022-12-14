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
    Closed: false, Bionic: false, Text: false, Hover: false, Seizure: false, Vision: false, Title: [false, undefined], Dark: false, Light: false, Content: false, Adjust: false, Highlight: false, Magnify: false
  })

  const [oldFeatures, setOldFeatures] = useState({})

  const [isModal, setIsModal] = useState(false)
  const [isConfirm, setIsConfirm] = useState(false)
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    window.scrollTo(0, scroll)
    if (enabledFeatures.Title[0]) {
      const h2s = document.querySelectorAll('h2, h3')
      h2s.forEach(h2 => h2.style.color = enabledFeatures.Title[1])
    } else document.querySelectorAll('h2').forEach(h2 => h2.style.color = '')

    if (enabledFeatures.Bionic) {
      const texts = document.querySelectorAll('h1, h2, h3, h4, p, a, li.related-searches__item')
      texts.forEach(element => {
        element.style.fontWeight = '400'
        const wordsArray = element.innerText.split(' ')
        let html = []
        wordsArray.forEach(word => (
          html.push(`<b>${word.slice(0, 3)}</b>${word.slice(3)}`)
        ))
        element.innerHTML = html.join(' ')
      })
    }

    if (enabledFeatures.Dark) {
      document.querySelector('html').style.filter = 'invert(1) hue-rotate(180deg)'
      document.querySelectorAll('img').forEach(el => el.style.filter = 'invert(1) hue-rotate(180deg)')
    } else document.querySelector('html').style.filter = 'none'
    if (enabledFeatures.Magnify || enabledFeatures.Adjust) {
      document.querySelector('html').style.fontSize = '20px'
    } else document.querySelector('html').style.fontSize = '16px'

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
        <Modal scroll={scroll} setIsModal={setIsModal} setIsConfirm={setIsConfirm} enabledFeatures={enabledFeatures} setEnabledFeatures={setEnabledFeatures} setOldFeatures={setOldFeatures} />}

      {isConfirm &&
        <Confirm setIsConfirm={setIsConfirm} oldFeatures={oldFeatures} setEnabledFeatures={setEnabledFeatures} enabledFeatures={enabledFeatures} />
      }
    </>
  );
}

export default App;
