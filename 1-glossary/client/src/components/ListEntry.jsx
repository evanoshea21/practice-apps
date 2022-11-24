



const ListEntry = ({entry, delThis, setUpdateEntry, setFormStyle}) => {

  const setStyle = () => {
    setFormStyle({display: 'block'});
  };

  return (
    <div className='list-entry'>
      <div className='term-def'>
        <div className='term'>{entry.term}</div>
        <div className='def'>{entry.definition}</div>
      </div>
      <div>
        <button className='btn update-btn'onClick={(e) => {e.preventDefault(); setStyle(); setUpdateEntry(entry)}}>Update</button>
        <button className='btn delete-btn'onClick={(e) => {e.preventDefault(); delThis(entry._id)}}>Delete</button>
      </div>
    </div>
  )
}

export default ListEntry;