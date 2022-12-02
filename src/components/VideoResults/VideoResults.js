import thumb1 from '../../assets/images/vid1.JPG'
import thumb2 from '../../assets/images/vid2.JPG'
import thumb3 from '../../assets/images/vid3.JPG'
import icon from '../../assets/logos/YouTube.svg'
import data from '../../data/dummy-videos.json'
import './VideosResults.scss'

function VideoResults() {
  const thumbs = [thumb1, thumb2, thumb3]
  const { page, vids } = data
  const { pageTitle, url, title } = page
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
      <div className='video-result'>
        {vids.map((vid, index) =>
          <article key={index} className='video-result__card' >
            <img src={thumbs[index]} alt="video thumbnail" />
            <h3 className='video-result__title'>{vid.title}</h3>
            <h4 className='video-result__channel'>{vid.channel}</h4>
            <p className='video-result__date'>Mar 26, 2020</p>
          </article>)}
      </div>
    </li>
  )
}

export default VideoResults