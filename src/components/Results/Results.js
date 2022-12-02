import data from '../../data/dummy-data.json'
import ResultItem from '../ResultItem/ResultItem'
import './Results.scss'


function Results() {
  return (
    <ul className='results'>
      {data.map(item => <ResultItem data={item} />)}
    </ul>
  )
}

export default Results