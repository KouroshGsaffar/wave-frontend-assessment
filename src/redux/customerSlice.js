import { createSlice } from "@reduxjs/toolkit";

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
    addCustomerInStore:(state,action)=>{
      state={...state, customers: [...state.customers, action.payload]}
      return state
    },
    deleteCustomerInStore:(state,action)=>{
      console.log(action.payload)
      state={...state, customers:state.customers.filter(customer=> customer.id !==action.payload)}
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

});
const { actions, reducer } = customerSlice;
export const {editCustomerInStore,addCustomerInStore,deleteCustomerInStore}=actions;
export const {fetchCustomerList,fetchCustomerListSuccess,fetchCustomerListError}=actions;
export default reducer;
