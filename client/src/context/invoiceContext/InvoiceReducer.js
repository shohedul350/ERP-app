import {
  GET_INVOICES,
  GET_SINGLE_INVOICE,
  ADD_INVOICE,
  UPDATE_INVOICE,
  EDIT_FORM,
  CLEAR_EDITFORM,
  CLEAR_SUCCESS,
  ERROR,
  CLEAR_ERROR,
  ADD_CART
} from '../type'



export default (state,action)=>{
    switch(action.type){
        case  GET_INVOICES:
            return{
               ...state,
               invoices: action.payload.getAllInvoice,
               success: action.payload.success,
               serverMessage:action.payload.msg
                  }
      case ERROR:
            return{
                ...state,
                serverMessage:action.payload.msg,
                error:true,
                success: false,
                 }
        case  ADD_INVOICE:
            return{
                ...state,
                invoices:state.invoices.map(invoice=>invoice._id === action.payload.newInvoice._id ? action.payload.newInvoice:invoice),
                success: action.payload.success,
                serverMessage:action.payload.msg
            }
        case GET_SINGLE_INVOICE:
            return{
                ...state,
               invoice: action.payload.invoice,
               success: action.payload.success,
               serverMessage:action.payload.msg,
            }

            case  UPDATE_INVOICE:
                return{
                ...state,
                invoices:state.invoices.map(invoice=>invoice._id === action.payload._id ? action.payload:invoice),
                success: action.payload.success,
                serverMessage:action.payload.msg,
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

       case ADD_CART:
                return{
                ...state,
                invoices:action.payload.tempInvoice,
                cart:[...state.cart,action.payload.singleInvoice],
                prod:[...state.prod,action.payload.pro]
                }
        case CLEAR_SUCCESS:
                    return{
                    ...state,
                    success:false,
                    error:false,
                    serverMessage:null,
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