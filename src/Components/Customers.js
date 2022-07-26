import React, { useState } from 'react'
import CustomerCard from './CustomerCard'
import { Button, Input, Table } from 'antd';


export default function Customers({ customers }) {
  const renderCustomer = customers.map((customer) => (
    <CustomerCard customer={customer} key={customer.id} />
  ));
  const [edit, setEdit] = useState({state:false,customerId:undefined});
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'channel',
    dataIndex: 'channel',
    key: 'channel',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'address',
    dataIndex: 'address',
    key: 'address',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'postal',
    dataIndex: 'postal',
    key: 'postal',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'city',
    dataIndex: 'city',
    key: 'city',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'province',
    dataIndex: 'province',
    key: 'province',
    // render: text => <a>{text}</a>,
  },
  {
    title: 'action',
    dataIndex: 'action',
    key: 'action',
    // render: text => <a>{text}</a>,
  },

  ]
  const handleSetEdit = (customerId) => {
    console.log(customerId)
    setEdit({state:true,customerId:customerId})}
  const data = customers.map(customer => {
    if (!( edit.state && edit.customerId === customer.id)) {
    return {
      key: customer.id,
      name: customer.name,
      email: customer.email,
      channel: customer.channel,
      address: customer.address,
      postal: customer.postal,
      city: customer.city,
      province: customer.province,
      action: <Button onClick={()=>handleSetEdit(customer.id)}>Edit</Button>
    }
}else {return {
  key: customer.id,
      name: <Input />,
      email: <Input/>,
      channel: <Input/>,
      address: <Input/>,
      postal: <Input/>,
      city: <Input/>,
      province: <Input/>,
      action: <Button onClick={()=>setEdit({...edit,state:false})}>CancelEdit</Button>
}}})

  const renderTable = <Table columns={columns} dataSource={data} />

  return <>

    {renderCustomer}
    {renderTable}
  </>
}
