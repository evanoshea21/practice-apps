import ListEntry from './ListEntry.jsx';


const List = ({list, delThis, setUpdateEntry}) => {
  return (
    <div className='list'>
      {list.map((entry) => {
        return <ListEntry entry={entry} setUpdateEntry={setUpdateEntry} delThis={delThis} key={entry._id}/>
      })}
    </div>
  )
}

export default List;