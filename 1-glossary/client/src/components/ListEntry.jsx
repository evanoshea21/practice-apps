



const ListEntry = ({entry}) => {
  return (
    <div className='list-entry'>
      <div>Term: {entry.term}</div>
      <div>Definition: {entry.definition}</div>
    </div>
  )
}

export default ListEntry;