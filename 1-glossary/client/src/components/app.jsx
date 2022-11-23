import {useState, useEffect} from 'react';
import React from 'react';
// const {useState, useEffect} = React;
import Add from './Add.jsx';
import Search from './Search.jsx';
import List from './List.jsx';
import axios from 'axios';



const App = () => {
  const defaultList = [{term: 'Dog', definition: 'An animal..', _id: 90}, {term: 'Cat', definition: 'A worse animal..', _id: 91}]
  const [list, setList] = React.useState(defaultList);

  useEffect(()=> { //mounting...
    getAndSetList();
  }, []);

  const getAndSetList = (endpoint = '') => {
    var url = endpoint.length == 0 ? '/glossary' : `/glossary/${endpoint}`;
    console.log('get and Set')
    axios.get(url)
    .then((response) => {
      setList(response.data);
    });
  }

return (
  <div className='app-pane'>
    <div className='left-pane'>
      <Add getAndSetList={getAndSetList}/>
      <Search getAndSetList={getAndSetList}/>
      <List list={list}/>
    </div>
    <div className='right-pane'>
      RIGHT PANE
    </div>
  </div>
)
}

export default App;