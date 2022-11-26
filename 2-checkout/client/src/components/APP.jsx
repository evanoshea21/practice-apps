import {useState, useEffect} from 'react';
import Form from './Form.jsx';
import axios from 'axios';

const App = () => {
  const [formNum, setFormNum] = useState(0);

  var postReq = (data) => {
    console.log('posting with Data->', data);
    axios.post('/checkout', data)
    .then((response) => {
      console.log('response in APP, ', response)
    })
    .catch((err) => {

    })
  };

  if(formNum === 0) {
    return (
    <div>
      <h1>Homepage</h1>
      <img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=170667a&w=0&k=20&c=jFgoM27NKwD5xbu6U9gkOwlIKc1L82PlFDYlcIJwi8E='></img>

      <Form formNum={formNum} postReq={postReq} setFormNum={setFormNum}/>
    </div>
    )
  }
return (
  <div>
    Homepage invisible...
    <Form formNum={formNum} postReq={postReq} setFormNum={setFormNum}/>
  </div>
)
};



export default App;