import axios from 'axios';
import React from 'react';

const Form = ({entry, getAndSetList, setFormStyle}) => {
  const [term, setTerm] = React.useState(entry.term);
  const [definition, setDefinition] = React.useState(entry.definition);

  const putReq = (id, t, d) => {
    // console.log('ID, Term, Def', id, term, def);
    axios.patch(`/glossary/${id}`, {term: t, definition: d})
    .then(() => {
      getAndSetList();
    })
  };

  React.useEffect(() => {
    setTerm(entry.term);
    setDefinition(entry.definition)
  }, [entry]);

  return (
    <div className='update-form'>
      <h1>Edit Term</h1>
      <form onSubmit={e => {e.preventDefault(); setFormStyle({display: 'none'}); putReq(entry._id, e.target.term.value, e.target.def.value)}}>
        <div>
          <span>Term:</span>
          <input type='text' name='term' value={term} onChange={e => {e.preventDefault(); setTerm(e.target.value)}}></input>
        </div>
        <div>
          <span>Definition: </span>
          <input type='text' name='def' value={definition} onChange={e => {e.preventDefault(); setDefinition(e.target.value)}}></input>
        </div>
        <button id='edit-btn' type='submit'>Edit...</button>
      </form>
    </div>
  )
}

export default Form;