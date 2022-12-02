import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
      <button className='footer__see-more' type='button' >See more</button>
      <p className='footer__country'>Canada</p>
      <section className='footer__lang'>
        <h5 className='footer__lang-heading'>Google Offered in:</h5>
        <p className='footer__lang-current'>English</p>
        <p className='footer__lang-alt'>français</p>
        <button type='button' className='footer__lang-button'>MORE</button>
      </section>
      <div className='footer__fine-print'>
        <p className='footer__fine-print-item'>Dark theme: off</p>
        <p className='footer__fine-print-item'> Settings</p>
        <p className='footer__fine-print-item'>Help</p>
        <p className='footer__fine-print-item'>Feedback</p>
        <p className='footer__fine-print-item'>Privacy</p>
        <p className='footer__fine-print-item'>Terms</p>
      </div>
    </footer>
  )
}

export default Footer