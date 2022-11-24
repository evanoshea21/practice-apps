



const ListEntry = ({entry, delThis, setUpdateEntry, setFormStyle}) => {

  const setStyle = () => {
    setFormStyle({display: 'block'});
  };

  return (
    <div className='list-entry'>
      <div className='term-def'>
        <div><span className='gray'>Term:</span> {entry.term}</div>
        <div><span className='gray'>Definition:</span> {entry.definition}</div>
      </div>
      <div>
        <button className='btn update-btn'onClick={(e) => {e.preventDefault(); setStyle(); setUpdateEntry(entry)}}>Update</button>
        <button className='btn delete-btn'onClick={(e) => {e.preventDefault(); delThis(entry._id)}}>Delete</button>
      </div>
    </div>
  )
}

export default ListEntry;