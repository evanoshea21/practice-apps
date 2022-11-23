



const ListEntry = ({entry}) => {
console.log('LIST ENTRY');
  return (
    <div className='list-entry'>
      <div>Term: {entry.term}</div>
      <div>Definition: {entry.definition}</div>
    </div>
  )
}

export default ListEntry;