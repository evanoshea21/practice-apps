import ListEntry from './ListEntry.jsx';


const List = ({list, delThis}) => {
  return (
    <div className='list'>
      {list.map((entry) => {
        return <ListEntry entry={entry} delThis={delThis} key={entry._id}/>
      })}
    </div>
  )
}

export default List;