import {
    GET_PRODUCT,
    UPDATE_PRODUCT,
    EDIT_FORM,
    CLEAR_EDITFORM,
    SET_MESSAHE,
    CLEAR_MESSAGE,
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

            case  UPDATE_PRODUCT:
                return{
                ...state,
                products:state.products.map(product=>product._id === action.payload._id ? action.payload:product)
                   }
         case SET_MESSAHE:
            return{
                ...state,
                message:action.payload
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

         case CLEAR_MESSAGE:
            return{
                    ...state,
                    message:null
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