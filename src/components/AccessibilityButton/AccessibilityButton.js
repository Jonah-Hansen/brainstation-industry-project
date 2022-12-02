
import './AccessibilityButton.scss';

function AccessibilityButton({ setIsModal, setScroll }) {
  return (
    <button className='accessibility-button' onClick={() => {
      setIsModal(true)
      setScroll(window.pageYOffset)
      window.scrollTo(0, 0)
    }}>
      <p className='accessibility-button__text'>Accessibility Options</p></button>
  )
}

export default AccessibilityButton