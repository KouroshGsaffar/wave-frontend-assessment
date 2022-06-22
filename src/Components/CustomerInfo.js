import React from 'react'

export default function CustomerInfo({customer}) {
  return (
    <div>
        { Object.keys(customer).map(key=>(
            (key==='id') ? null : 
            <div key={`${key}-${customer.id}`}>
                {`${key}: ${customer[key]}`}
            </div>))}
    </div>
  )
}
