import {
   GET_CUSTOMERS,
   GET_CUSTOMER,
   ADD_CUSTOMER,
   DELETE_CUSTOMER,
   UPDATE_CUSTOMER,
   SEARCH_CUSTOMER,
   EDIT_FORM,
   CLEAR_EDITFORM,
   ERROR,
   CLEAR_ERROR,
   CLEAR_SUCCESS

} from '../type'



export default (state,action)=>{
    switch(action.type){
           case GET_CUSTOMERS:
                return{
                ...state,
                customers: action.payload.getCustomers,
                serverMessage:action.payload.msg,
                success: action.payload.success,
            }
           case GET_CUSTOMER:
                return{
                ...state,
                customer: action.payload.customer,
                serverMessage:action.payload.msg,
                success: action.payload.success,
            }
            case  UPDATE_CUSTOMER:
                return{
                ...state,
                customers:state.customers.map(customer=>customer._id === action.payload.updateCustomer._id ? action.payload.updateCustomer:customer),
                success:action.payload.success,
                serverMessage: action.payload.msg,
                   }
            case  ADD_CUSTOMER:
                return{
                ...state,
                customers:state.customers.map(customer=>customer._id === action.payload.newCustomer._id ? action.payload.newCustomer:customer),
                serverMessage:action.payload.msg,
                success: action.payload.success,
                   }
            case DELETE_CUSTOMER:
                return {
                ...state,
                customers: state.customers.filter(customer => customer._id !== action.payload.deleteCustomer),
                success:action.payload.success,
                serverMessage: action.payload.msg,
                }

            case EDIT_FORM:
                return{
                ...state,
                editForm:action.payload
                         
                }

           case CLEAR_EDITFORM:
                return{
                ...state,
                 editForm:null
                } 
           case CLEAR_SUCCESS:
                return{
                ...state,
                success:false,
                error:false,
                serverMessage:null,
                 }
            case ERROR:
                 return{
                ...state,
                success: false,
                error: true,
                serverMessage:action.payload.msg
                }
            case CLEAR_ERROR:
                return{
                ...state,
                success: false,
                error: false,
                serverMessage: null
                 }

            default:
                return state
    }
}