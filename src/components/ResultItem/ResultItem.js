import icon from '../../assets/logos/glueglue.png'
import './ResultItem.scss'

function ResultItem({ data }) {
  const { pageTitle, url, url_link, title, description } = data
  return (
    <li className='result-item'>
      <a href={url_link} className='result-item__title'>{title}</a>
      <div className='result-item__header'>
        <img src={icon} alt={`${pageTitle}`} className='result-item__icon' />
        <hgroup>
          <h3 className='result-item__page-title'>{pageTitle}</h3>
          <h2 className='result-item__url'>{url}</h2>
        </hgroup>
      </div>
      <p className='result-item__description'>{description}</p>
    </li>
  )
}

export default ResultItem