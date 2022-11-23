import axios from 'axios';


const Search = ({getAndSetList}) => {

  const get = (term) => {
      getAndSetList(term);
  }

  return (
    <div>
     <form onSubmit={(e) => {e.preventDefault(); get(e.target.entry.value)}}>
        <input type='text' name='entry'></input>
        <button type='submit'>Search</button>
        <button onClick={getAndSetList}>Show All</button>
      </form>
    </div>
  )
}

export default Search;