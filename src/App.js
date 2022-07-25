import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
// import fetchCustomerList from './redux/fetchCustomerList'
import Customers from './Components/Customers'
import { fetchCustomerList } from './redux/customerSlice'


function App() {
  const dispatch=useDispatch()
  const {loading,error,customers}=useSelector(state=> state.customer)
  // Due to react 18 changes (React.StrictMode), this useEffect will be rendered twice. 
  // That's why the first fetch data will be called twice in redux devTool.
  useEffect(() => {
    if(customers.length===0){
      dispatch(fetchCustomerList())
    }
  }, [customers.length, dispatch])
  const renderLoading=<h1>Loading ...</h1>
  if(error.length){
    console.log('Error==>',error) 
    return <></>
  } 

  return (loading ? renderLoading :  <Customers customers={customers} />)
}

export default App;
