import React from 'react'

export default function ActionButtons({edit,toggleEdit,handleUpdateCustomer,handleDeleteCustomer,id}) {
  console.log(id)
  return (
    <div style={edit ? {margin:'15px'} : {}}>
        <button onClick={toggleEdit}>
            {`${edit ? 'Cancel Edit' :'Edit'}`}
        </button>
        {edit && (<button onClick={handleUpdateCustomer}>Update</button>)}
        {!edit && (<button onClick={handleDeleteCustomer}>Delete</button>)}
    </div>
  ) 
}
