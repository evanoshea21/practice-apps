const axios = require('axios');

const Add = ({getAndSetList}) => {

  const postReq = (data) => {
    // console.log('data in ADD post->', data);
    axios.post('/glossary', data)
    .then((response) => {
      // console.log('getting back to ADD RESPONSE->', response);
      getAndSetList();
    })
  }

  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault(); postReq({term: e.target.entryTerm.value, definition: e.target.entryDef.value})}}>
        <input type='text' name='entryTerm' placeholder='term...'></input>
        <input type='text' name='entryDef' placeholder='definition...'></input>
        <button type='submit'>Add Entry</button>
      </form>
    </div>
  )
}

export default Add;