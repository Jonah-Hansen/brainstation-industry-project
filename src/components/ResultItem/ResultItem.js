import './ResultItem.scss'

function ResultItem({ data }) {
  const { pageTitle, url, title, description, icon } = data
  return (
    <li className='result-item'>
      <h2 className='result-item__title'>{title}</h2>
      <div className='result-item__header'>
        <img src={icon} alt={`${pageTitle}`} className='result-item__icon' />
        <hgroup>
          <h3 className='result-item__page-title'>{pageTitle}</h3>
          <h4 className='result-item__url'>{url}</h4>
        </hgroup>
      </div>
      <p className='result-item__description'>{description}</p>
    </li>
  )
}

export default ResultItem