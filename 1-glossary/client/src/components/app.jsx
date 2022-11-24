import {useState, useEffect} from 'react';
import React from 'react';
// const {useState, useEffect} = React;
import Add from './Add.jsx';
import Search from './Search.jsx';
import List from './List.jsx';
import Header from './Header.jsx';
import Form from './Form.jsx';
import axios from 'axios';



const App = () => {
  const defaultList = [{term: 'Dog', definition: 'An animal..', _id: 90}, {term: 'Cat', definition: 'A worse animal..', _id: 91}]
  const [list, setList] = React.useState(defaultList);
  const [updateEntry, setUpdateEntry] = React.useState({term: '', definition: ''});
  // const [list, setList] = React.useState(defaultList);

  useEffect(()=> { //mounting...
    getAndSetList();
  }, []);

  const delThis = (id) => {
    // console.log('delThis with id->', id);
    axios.delete(`glossary/${id}`)
    .then((response) => {console.log(response); getAndSetList()});
  }

  const getAndSetList = (endpoint = '') => {
    var url = endpoint.length == 0 ? '/glossary' : `/glossary/${endpoint}`;
    axios.get(url)
    .then((response) => {
      setList(response.data);
    });
  }

return (
  <div className='app-pane'>
    <Header/>

    <div className='panes'>
      <div className='left-pane'>
        <Add getAndSetList={getAndSetList}/>
        <Search getAndSetList={getAndSetList}/>
        <List list={list} delThis={delThis} setUpdateEntry={setUpdateEntry}/>
      </div>
      <div className='right-pane'>
        <Form entry={updateEntry} getAndSetList={getAndSetList}/>
      </div>
    </div>

  </div>
)
}

export default App;