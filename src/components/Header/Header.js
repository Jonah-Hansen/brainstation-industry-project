import React from 'react';
import CancelIcon from '../../assets/icons/cancel.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import SearchIcon from '../../assets/icons/search.svg';
import GoogleLogo from '../../assets/logos/google.svg';
import './Header.scss';


function Header() {
  return (
    <div className='header'>
      <section className='header__assets'>
        <img className='header__menu-icon' src={MenuIcon} alt="Menu Icon" />
        <img className='header__logo' src={GoogleLogo} alt="Google Logo" />
        <div className='header__avatar'></div>
      </section>
      <section className='header__searchbar'>
        <img className='header__menu-icon header__menu-icon--search' src={SearchIcon} alt="Search Icon" />
        <input className='header__searchfield' type="text" placeholder='Google Search' />
        <img className='header__menu-icon header__menu-icon--cancel' src={CancelIcon} alt="Cancel Icon" />
      </section>
      <div className='header__modes'>
        <p className='header__mode'>Images</p>
        <p className='header__mode'>Videos</p>
        <p className='header__mode'>Books</p>
        <p className='header__mode'>News</p>
        <p className='header__mode'>Shopping</p>
        <p className='header__mode'>Shopping</p>
        <p className='header__mode'>Shopping</p>
        <p className='header__mode'>Shopping</p>
      </div>
    </div>
  )
}

export default Header