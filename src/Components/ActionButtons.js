import React from 'react'

export default function ActionButtons({edit,toggleEdit,handleUpdateCustomer}) {
  return (
    <>
        <button onClick={toggleEdit}>
            {`${edit ? 'Cancel Edit' :'Edit'}`}
        </button>
        {edit && <button onClick={handleUpdateCustomer}>Update</button>}
    </>
  )
}
