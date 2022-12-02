import data from '../../data/dummy-data.json';
import RelatedSearches from '../RelatedSearches/RelatedSearches';
import ResultItem from '../ResultItem/ResultItem';
import './Results.scss';

const data1 = data.slice(0, 2)
const data2 = data.slice(2)

function Results() {
  return (
    <ul className='results'>
      {data1.map((item, index) => <ResultItem key={index} data={item} />)}
      <RelatedSearches />
      {data2.map((item, index) => <ResultItem key={index} data={item} />)}
    </ul>
  )
}

export default Results