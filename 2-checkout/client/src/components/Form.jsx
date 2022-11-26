import {useState, useEffect} from 'react';
import Promise from 'bluebird';

const Form = ({formNum, setFormNum, postReq}) => {
  const [buildForm, setBuildForm] = useState({});

  const handleSubmit = (id) => { //populates formData with results
    var obj = {};
    Object.assign(obj, buildForm);
    const form = document.getElementById(`${id}`);
    const formData = new FormData(form);
    console.log('Array?-> ', Array.isArray(formData));
    for (var [key, value] of formData) {
      console.log(`Name/Value -> ${key}: ${value}\n`);
      obj[key] = value;
    }
    setBuildForm(obj);
  };

  // useEffect(()=> {
  //   console.log('useEffect MY FORM->', buildForm);
  //   if(buildForm.phone_num) {
  //     console.log('ready to send!');
  //   }
  // }, [buildForm])


  // const checkNewUser = () => {
  //   if(session_id is unique) {

  //   } else {

  //   }
  // };


  if(formNum === 0) { //invisible
    return (
      <div>
        form invisible...
        <button onClick={e => {e.preventDefault(); setFormNum(1)}}>Checkout</button>
      </div>
    )
  }

  if(formNum === 1) { //page 1
    return (
      <div>
        Form View PAGE 1
        <form id='form1' onSubmit={e => {e.preventDefault(); handleSubmit('form1'); setFormNum(2)}}>
          <label>Name:
            <input type='text' name='name' required></input>
          </label>
          <label >Email:
            <input type='email' name='email' required></input>
          </label>
          <label>Password:
            <input type='password' name='password' required></input>
          </label>
          <button type='submit'>Continue Checkout</button>
        </form>

      </div>
    )
  }
  if(formNum === 2) { //page 2
    return (
      <div>
        Form View PAGE 2
        <form id='form2' onSubmit={e => {e.preventDefault(); handleSubmit('form2'); setFormNum(3);}}>
          <label>Address - line 1:
            <input type='text' name='line1' required></input>
          </label>
          <label >Address - line 2:
            <input type='text' name='line2' required></input>
          </label>
          <label>City:
            <input type='text' name='city' required></input>
          </label>
          <label>State:
            <input type='text'  maxLength='2'  minLength='2' name='state' required></input>
          </label>
          <label>Zip Code:
            <input type='number' maxLength='5'  minLength='5' name='zipcode' required></input>
          </label>
          <label>Phone Number:
            <input type='tel' name='phone' required></input>
          </label>
          <button type='submit'>Continue Checkout</button>
          <button onClick={e => {e.preventDefault(); console.log('MY formData', buildForm)}}>ShowData</button>
        </form>

      </div>
    )
  }
  if(formNum === 3) { //page 3
    return (
      <div>
        Form View PAGE 3
        <form id='form3' onSubmit={e => {e.preventDefault(); handleSubmit('form3'); setFormNum(4)}}>
          <label>Credit Card Number:
            <input type="number" maxLength="19" placeholder="xxxx xxxx xxxx xxxx" name='credit'></input>
          </label>
          <label >Expiration Date:
            <input type='date' name='exp_date' required></input>
          </label>
          <label>CVV:
            <input type='number' minLength="3" maxLength="3" name='cvv' required></input>
          </label>
          <button type='submit'>Continue Checkout</button>
        </form>

      </div>
    )
  }
  if(formNum === 4) { //page 4 (summary)
  var html = '';
    for(var key in buildForm) {
    if(!['password', ''].includes(key)) {
      html += key + ' : ' + buildForm[key] + '<br>'
    }
    }
    return (
      <div>
        <h1>Summary of Personal Details</h1>
        <p dangerouslySetInnerHTML={{__html: html}}></p>
        <button onClick={e => {e.preventDefault(); postReq(buildForm)}}>Purchase & Return Home</button>
      </div>
    )
  }
};

export default Form;
//  const [buildForm, setBuildForm] = useState({});