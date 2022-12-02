
import './AccessibilityButton.scss'

function AccessibilityButton({ modalRef }) {
  return (
    <button className='accessibility-button' onClick={() => {
      modalRef.current.className = 'modal'
      window.scrollTo(0, 0)
    }}>
      <p className='accessibility-button__text'>Accessibility Options</p></button>
  )
}

export default AccessibilityButton