import { createSlice } from "@reduxjs/toolkit";
// import fetchCustomerList from './fetchCustomerList'

// Initial state
const customerInitialState = {
  customers:[],
  loading:false,
  error:{}
};

// Reducers
const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  // Non-async reducers
  reducers: {
    editCustomerInStore:(state,action)=>{
        state={...state,customers:state.customers.map(customer=>{
            if (customer.id!==action.payload.id){
                return customer
            }
            return action.payload
        })}
        return state
    },
    fetchCustomerList:(state)=>{
        state={...state,loading:true}
        return state
    },
    fetchCustomerListSuccess:(state,action)=>{
        state={...state,loading:false,customers:action.payload.customers}
        return state
    },
    fetchCustomerListError:(state,action)=>{
        state={...state,loading:false,error:action.payload}
        return state
    }
  },
  // Async reducers
  // extraReducers: {
  //   // Pending
  //   [fetchCustomerList.pending.type]: (state) => (
  //       {...state,loading:true}
  //   ),
  //   // Fulfilled
  //   [fetchCustomerList.fulfilled.type]: (state, action) => (
  //       {...state,customers:action.payload.customers, loading:false}
  //   ),
  //   // Rejected
  //   [fetchCustomerList.rejected.type]: (state, action) => (
  //       {...state,error:action.payload, loading:false}
  //   )
  // }
});
const { actions, reducer } = customerSlice;
export const {editCustomerInStore}=actions;
export const {fetchCustomerList,fetchCustomerListSuccess,fetchCustomerListError}=actions;
export default reducer;
