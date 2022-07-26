import React from 'react'
import Button from 'antd/es/button';

export default function ActionButtons({edit,toggleEdit,handleUpdateCustomer}) {
  return (
    <>
        <Button onClick={toggleEdit}>
            {`${edit ? 'Cancel Edit' :'Edit'}`}
        </Button>
        {edit && <button onClick={handleUpdateCustomer}>Update</button>}
    </>
  )
}
