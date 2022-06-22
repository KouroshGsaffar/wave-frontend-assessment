import React from 'react'
import CustomHook from './CustomHook'
import EditCustomer from './EditCustomer'
import CustomerInfo from './CustomerInfo'
import ActionButtons from './ActionButtons'


export default function CustomerCard({customer}) {
    const{edit,inputValues,handleOnChangeInput,handleUpdateCustomer,handleKeyDown,toggleEdit}=CustomHook(customer)
  return (
    <div style={{margin:"15px"}}>
        {edit ? 
        <EditCustomer
        customer={customer}
        handleKeyDown={handleKeyDown}
        inputValues={inputValues}
        handleOnChangeInput={handleOnChangeInput}/>
        : <CustomerInfo customer={customer}/>}
        <ActionButtons edit={edit} handleUpdateCustomer={handleUpdateCustomer} toggleEdit={toggleEdit}  />
    </div>
  )
}
