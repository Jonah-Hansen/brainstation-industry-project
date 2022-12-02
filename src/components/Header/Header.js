import React from 'react';
import './Header.scss';

import CancelIcon from '../../assets/icons/cancel.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import SearchIcon from '../../assets/icons/search.svg';
import GoogleLogo from '../../assets/logos/google.svg';

import AppsIcon from '../../assets/icons/apps.svg';
import BooksIcon from '../../assets/icons/book.svg';
import ImageIcon from '../../assets/icons/images.svg';
import NewsIcon from '../../assets/icons/news.svg';
import MapsIcon from '../../assets/icons/place.svg';
import ShoppingIcon from '../../assets/icons/shop.svg';
import FinanceIcon from '../../assets/icons/stock.svg';
import FlightsIcon from '../../assets/icons/travel.svg';
import VideoIcon from '../../assets/icons/video.svg';


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
        <input className='header__searchfield' type="text" placeholder='Google Accessibility' />
        <img className='header__menu-icon header__menu-icon--cancel' src={CancelIcon} alt="Cancel Icon" />
      </section>
      <ul className='header__modes'>
        <li className='header__mode'>
          <img className='header__mode--icon' src={ImageIcon} alt="Images Icon" />
          <p>Images</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={VideoIcon} alt="Videos Icon" />
          <p>Videos</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={NewsIcon} alt="News Icon" />
          <p>News</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={AppsIcon} alt="Apps Icon" />
          <p>Apps</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={ShoppingIcon} alt="Shopping Icon" />
          <p>Shopping</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={BooksIcon} alt="Books Icon" />
          <p>Books</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={MapsIcon} alt="Maps Icon" />
          <p>Maps</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={FlightsIcon} alt="Flights Icon" />
          <p>Flights</p>
        </li>
        <li className='header__mode'>
          <img className='header__mode--icon' src={FinanceIcon} alt="Finance Icon" />
          <p>Finance</p>
        </li>
        <li className='header__tool'>
          <p>All Filters</p>
        </li>
        <li className='header__tool header__tool--mid'>
          <p>Feedback</p>
        </li>
        <li className='header__tool'>
          <p>Tools</p>
        </li>
      </ul>
    </div>
  )
}

export default Header