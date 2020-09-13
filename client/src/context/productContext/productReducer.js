import {
    GET_PRODUCT,
    UPLOAD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    EDIT_FORM,
    CLEAR_EDITFORM,
    CLEAR_ERROR,
    ERROR,
    CLEAR_SUCCESS,
    ADD_CART
} from '../type'



export default (state,action)=>{
    switch(action.type){
         case GET_PRODUCT:
            return{
                ...state,
                products: action.payload.getAllProduct,
                success:action.payload.success,
                serverMessage: action.payload.msg,
            }
            case UPLOAD_PRODUCT:
                return{
                    ...state,
                    products: [...state.products, action.payload.newProduct],
                    success:action.payload.success,
                    serverMessage: action.payload.msg,
                }
                case DELETE_PRODUCT:
                    return {
                      ...state,
                      products: state.products.filter(product => product._id !== action.payload.deleteProduct),
                      success:action.payload.success,
                      serverMessage: action.payload.msg,
                    }

            case  UPDATE_PRODUCT:
                return{
                ...state,
                products:state.products.map(product=>product._id === action.payload._id ? action.payload:product)
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
        case ADD_CART:
                    return{
                        ...state,
                        products:action.payload.tempProduct,
                        cart:[...state.cart,action.payload.product]
                    }

        default:
            return state
    }
}