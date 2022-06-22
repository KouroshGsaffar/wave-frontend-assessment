import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {editCustomerInStore} from '../redux/customerSlice'

export default function CustomHook(customer) {
    const dispatch=useDispatch()
    const [edit, setEdit] = useState(false)
    const toggleEdit=()=>setEdit(!edit)
    const initialValues=Object.keys(customer).reduce((acc, key) => {
        acc[key]=customer[key]
        return acc
    }, {})
    const [inputValues, setInputValues] = useState(initialValues);
    const handleOnChangeInput=(e,key)=>{
        setInputValues({...inputValues,[key]:e.target.value})
    }
    const handleUpdateCustomer=()=>{
        if (Object.values(inputValues).includes('')){
            alert('All fields are required')
            console.log('error')
        }else{
            console.log(inputValues)
            dispatch(editCustomerInStore(inputValues))
            toggleEdit()
        }
    }
    const handleKeyDown=(e)=>{
        if (e.key === 'Escape'){
            setInputValues(initialValues)
            toggleEdit()
        }else if(e.key === 'Enter'){
            handleUpdateCustomer()
        }
    }
  return ({edit,toggleEdit,inputValues,handleOnChangeInput,handleUpdateCustomer,handleKeyDown})
}
