import ListEntry from './ListEntry.jsx';


const List = ({list}) => {
  return (
    <div>
      {list.map((entry) => {
        return <ListEntry entry={entry} key={entry._id}/>
      })}
    </div>
  )
}

export default List;