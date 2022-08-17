import React from 'react'
import CustomerCard from './CustomerCard'
import AddNewCustomer from './AddNewCustomer';


export default function Customers({ customers }) {
  const renderCustomer = customers.map((customer) => (
    <CustomerCard customer={customer} key={customer.id} />
  ));

  return(
  <>
    {renderCustomer}
    <AddNewCustomer />
  </>
  )
}
