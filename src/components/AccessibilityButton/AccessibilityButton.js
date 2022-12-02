import './AccessibilityButton.scss'

function AccessibilityButton({ modalRef }) {
  return (
    <button className='accessibility-button' onClick={() => modalRef.current.className = 'modal'}><p className='accessibility-button__text'>Accessibility Options</p></button>
  )
}

export default AccessibilityButton