import data from '../../data/dummy-data.json'
import ResultItem from '../ResultItem/ResultItem'
import './Results.scss'


function Results() {
  return (
    <ul className='results'>
      {data.map((item, index) => <ResultItem key={index} data={item} />)}
    </ul>
  )
}

export default Results