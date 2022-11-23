import axios from 'axios';


const Search = () => {

  const get = (term) => {
    axios.get(`/glossary/${term}`)
  }

  return (
    <div>
     <form onSubmit={(e) => {e.preventDefault(); get(e.target.entry.value)}}>
        <input type='text' name='entry'></input>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default Search;