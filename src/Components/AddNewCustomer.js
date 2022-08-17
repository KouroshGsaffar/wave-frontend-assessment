import React, { useState } from 'react'
import {addCustomerInStore} from '../redux/customerSlice'
import { useDispatch } from 'react-redux'
import './AddNewCustomer.css'


export default function AddNewCustomer() {
  const dispatch=useDispatch()
  const customer={
      name: '',
      email: '',
      channel: '',
      address: '',
      postal: '',
      city: '',
      province: '',
      country: ''}
    
  const [inputValues, setInputValues] = useState(customer);
  const handleOnChangeInput=(e,key)=>{
      setInputValues({...inputValues,[key]:e.target.value})
  }
  const handleAddCustomer=()=>{
      if (Object.values(inputValues).includes('')){
          alert('All fields are required')
          console.log('error')
      }else{
          console.log(inputValues)
          dispatch(addCustomerInStore(inputValues))
          setInputValues(customer)
      }
  }
  const handleClearForm=()=>{
    setInputValues(customer)
  }
  const handleKeyDown=(e)=>{
      if (e.key === 'Escape'){
          setInputValues(customer)
      }else if(e.key === 'Enter'){
          handleAddCustomer()
      }
  }
  return (
    <div className='wrapper'>
      {Object.keys(customer).map(key=>(
            (key==='id') ? null : // To not showing the ID
            <div className='row' key={`${key}`}>
                {key}: <input value={inputValues[key]} onChange={(e)=>handleOnChangeInput(e,key)} onKeyDown={handleKeyDown}/>
            </div>))}
            <button onClick={handleAddCustomer}>Add Customer</button>
            <button onClick={handleClearForm}>Clear Forms</button>  
    </div>
  )
}
