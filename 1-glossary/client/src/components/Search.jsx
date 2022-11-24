import axios from 'axios';


const Search = ({getAndSetList}) => {

  const get = (term) => {
      getAndSetList(term);
  }

  return (
    <div id='search'>
     <form onSubmit={(e) => {e.preventDefault(); get(e.target.entry.value)}}>
        <input type='text' name='entry'></input>
        <button type='submit'>Search</button>
        <button onClick={e => {e.preventDefault(); getAndSetList()}}>Show All</button>
      </form>
    </div>
  )
}

export default Search;