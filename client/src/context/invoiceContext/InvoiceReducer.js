import {
  GET_INVOICE,
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
        
        case  ADD_INVOICE:
            return{
                ...state,
               success: true
            }
         case  GET_INVOICE:
            return{
                ...state,
               invoices: action.payload,
               success: true
            }
          case GET_SINGLE_INVOICE:
            return{
                ...state,
               invoice: action.payload,
               success: true
            }

            case  UPDATE_INVOICE:
                return{
                ...state,
                invoices:state.invoices.map(invoice=>invoice._id === action.payload._id ? action.payload:invoice),
                success: true
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
                    success:false
                }
        case ERROR:
            return{
                    ...state,
                    error:action.payload
                 }
        case CLEAR_ERROR:
             return{
                    ...state,
                    error:null
                         }
       case ADD_CART:
                return{
                ...state,
                invoices:action.payload.tempInvoice,
                cart:[...state.cart,action.payload.singleInvoice],
                prod:[...state.prod,action.payload.pro]
                }
        

        default:
            return state
    }
}