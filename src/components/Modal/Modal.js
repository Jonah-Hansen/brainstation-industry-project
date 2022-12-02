import { Element, Link } from 'react-scroll';
import AccessibilityOption from '../AccessibilityOption/AccessibilityOption';
import './Modal.scss';

function Modal() {

  return (
    <main className="modal">
      <header className='modal__header'>
        <section className='modal__heading-container'>
          <button className='modal__back'>
            <span className='modal__back-text'>back</span>
          </button>
          <h1 className='modal__title'>Accessibility</h1>
        </section>
        <nav className='modal__nav'>
          <ul className='modal__nav-list'>
            <li className='modal__nav-list-item'>
              <Link activeClass="active" to="general" spy={true} smooth={true} offset={-50} duration={250} >General</Link>
            </li>
            <li className='modal__nav-list-item'>
              <Link activeClass="active" to="visual" spy={true} smooth={true} offset={-50} duration={250} >Visual</Link>
            </li>
            <li className='modal__nav-list-item'>
              <Link activeClass="active" to="content" spy={true} smooth={true} offset={-50} duration={250} >Content Adjustments</Link>
            </li>
          </ul>
        </nav>
      </header>
      <input type="search" placeholder='Search Setting' className='modal__search' />
      <Element name='general' >
        <section className='modal__section'>
          <h2 className='modal__section-heading'>General</h2>
          <AccessibilityOption title={'Blind Users Friendly'} description={'Activates Screen reader'} />
          <AccessibilityOption title={'ADHD Friendly'} description={'More Focus, fewer Distractions'} />
          <AccessibilityOption title={'Vision Impaired Friendly'} description={'Enhances screen visuals'} />
          <AccessibilityOption title={'Seizure Safe'} description={'Clear flashes and reduces color'} />
          <AccessibilityOption title={'Cognitive disability Friendly'} description={'Assists with reading and focusing'} />
        </section>
      </Element>
      <Element name='visual'>
        <section className='modal__section'>
          <h2 className='modal__section-heading'>visual</h2>
          <AccessibilityOption title={'Bionic Reading'} description={'makes words easier to distinguish'} />
          <AccessibilityOption title={'Title Colors'} type={'colors'} />
        </section>
      </Element>
      <Element name='content' >
        <section className='modal__section'>
          <h2 className='modal__section-heading'>Content Adjustments</h2>
          <AccessibilityOption title={'Blind Users Friendly'} description={'Activates Screen reader'} />
          <AccessibilityOption title={'ADHD Friendly'} description={'More Focus, fewer Distractions'} />
          <AccessibilityOption title={'Vision Impaired Friendly'} description={'Enhances screen visuals'} />
          <AccessibilityOption title={'Seizure Safe'} description={'Clear flashes and reduces color'} />
          <AccessibilityOption title={'Cognitive disability Friendly'} description={'Assists with reading and focusing'} />
        </section>
      </Element>
    </main>
  )
}

export default Modal