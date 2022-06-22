import React from 'react'

export default function EditCustomer({customer,inputValues,handleOnChangeInput,handleKeyDown}) {
  return (
    <div>
            {Object.keys(customer).map(key=>(
            (key==='id') ? null : // To not showing the ID
            <div key={`${key}-${customer.id}`}>
                {key}: <input value={inputValues[key]} onChange={(e)=>handleOnChangeInput(e,key)} onKeyDown={handleKeyDown}/>
            </div>))}     
    </div>
  )
}
