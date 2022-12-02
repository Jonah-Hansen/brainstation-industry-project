import { useState } from 'react';
import { Element, Link } from 'react-scroll';
import AccessibilityOption from '../AccessibilityOption/AccessibilityOption';
import './Modal.scss';

import AdhdIcon from '../../assets/icons/adhd.svg';
import FontSizingIcon from '../../assets/icons/adjust.svg';
import BionicIcon from '../../assets/icons/bionic.svg';
import BlindIcon from '../../assets/icons/blind.svg';
import CognitiveIcon from '../../assets/icons/cognitive.svg';
import DarkContrastIcon from '../../assets/icons/dark-contrast.svg';
import HighlightIcon from '../../assets/icons/highlight.svg';
import LightContrastIcon from '../../assets/icons/light-contrast.svg';
import MagnifyIcon from '../../assets/icons/magnifier.svg';
import SeizureIcon from '../../assets/icons/seizure.svg';
import ContentIcon from '../../assets/icons/spacing.svg';
import ImpairedIcon from '../../assets/icons/vision.svg';

function Modal({ enabledFeatures, setEnabledFeatures, setIsModal, setIsConfirm, setOldFeatures }) {

  const [features, setFeatures] = useState({ ...enabledFeatures })

  const handleSwitch = event => {
    const newFeatures = { ...features }
    if (event.target.name.split(' ')[0] === 'Title') {
      newFeatures[event.target.name.split(' ')[0]][0] = event.target.checked
    } else {
      newFeatures[event.target.name.split(' ')[0]] = event.target.checked
    }
    setFeatures(newFeatures)
  }

  const handleColor = (color) => {
    const newFeatures = { ...features }
    newFeatures.Title[1] = color
    setFeatures(newFeatures)
  }

  const handleCancel = () => {
    setFeatures(enabledFeatures)
    setIsModal(false)
  }

  const handleDone = () => {
    setOldFeatures(enabledFeatures)
    setEnabledFeatures(features)
    setIsModal(false)
    setIsConfirm(true)
  }

  return (
    <main className="modal">
      <header className='modal__header'>
        <section className='modal__heading-container'>
          <button className='modal__back' onClick={handleCancel}>
            <span className='modal__back-text'>back</span>
          </button>
          <h1 className='modal__title'>Google Accessibility</h1>
          <button className='modal__done' onClick={handleDone} >Done</button>
        </section>

        <nav className='modal__nav'>
          <ul className='modal__nav-list'>
            <li className='modal__nav-list-item'>
              <Link className='modal__nav__link' activeClass="active" to="general" spy={true} hashSpy={true} smooth={true} offset={-80} duration={250} >General</Link>
            </li>
            <li className='modal__nav-list-item'>
              <Link className='modal__nav__link' activeClass="active" to="visual" spy={true} hashSpy={true} smooth={true} offset={-80} duration={250} >Visual</Link>
            </li>
            <li className='modal__nav-list-item'>
              <Link className='modal__nav__link' activeClass="active" to="content" spy={true} hashSpy={true} smooth={true} offset={-80} duration={250} >Content Adjustments</Link>
            </li>
            <li className='modal__nav-list-item'>
              <Link className='modal__nav__link' activeClass="active" to="content" spy={true} hashSpy={true} smooth={true} offset={-80} duration={250} >More</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='modal__searchbar'>
        <input type="search" placeholder='Search Settings' className='modal__searchfield' />
      </div>
      <Element name='general' >
        <section className='modal__section'>
          <h2 className='modal__section-heading'>General</h2>
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Text to Speech'} icon={BlindIcon} description={'Activates Screen Reader'} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Closed Captioning'} icon={AdhdIcon} description={'More Focus, Fewer Distractions'} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Vision Impaired Friendly'} icon={ImpairedIcon} description={'Enhances screen visuals'} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Seizure Safe'} icon={SeizureIcon} description={'Clear flashes and reduces color'} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Hover Text'} icon={CognitiveIcon} description={'Assists with reading and focusing'} />
        </section>
      </Element>
      <Element name='visual'>
        <section className='modal__section'>
          <h2 className='modal__section-heading'>Visuals</h2>
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Dark Contrast'} icon={DarkContrastIcon} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Light Contrast'} icon={LightContrastIcon} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Bionic Reading'} icon={BionicIcon} description={'Makes words easier to distinguish'} />
          <AccessibilityOption handleSwitch={handleSwitch} handleColor={handleColor} features={features} title={'Title Colors'} type={'colors'} />
        </section>
      </Element>
      <Element name='content' >
        <section className='modal__section'>
          <h2 className='modal__section-heading'>Content Adjustments</h2>
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Content Spacing'} icon={ContentIcon} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Adjust Font Sizing'} icon={FontSizingIcon} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Highlight Titles'} icon={HighlightIcon} />
          <AccessibilityOption handleSwitch={handleSwitch} features={features} title={'Magnify Text'} icon={MagnifyIcon} />
        </section>
      </Element>
    </main>
  )
}

export default Modal