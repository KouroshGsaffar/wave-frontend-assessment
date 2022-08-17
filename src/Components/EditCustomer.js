import React from 'react'

export default function EditCustomer({customer,inputValues,handleOnChangeInput,handleKeyDown}) {
  return (
    <div className='wrapper'>
            {Object.keys(customer).map(key=>(
            (key==='id') ? null : // To not showing the ID
            <div className='row' key={`${key}-${customer.id}`}>
                {key}: <input value={inputValues[key]} onChange={(e)=>{e.preventDefault(); e.stopPropagation(); handleOnChangeInput(e,key)}} onKeyDown={handleKeyDown}/>
                {/* {key}: <input value={inputValues[key]} onChange={(e)=>console.log(e.target.value)} onKeyDown={handleKeyDown}/> */}
            </div>))}     
    </div>
  )
}
