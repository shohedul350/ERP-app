import {
    SUCCES_REGISTER,
    SUCCES_LOGIN,
    LOG_OUT,
    SET_ADMIN,
    SET_USER,
    SET_ALL,
    DELETE_AUTH,
    CLEAR_SUCCESS,
    CHANGE_PASSWORD,
    ERROR,
    CLEAR_ERROR,
    SEND_FORGET_REQUEST,
    RESET_REQUEST

} from '../type'

export default (state,action)=>{
    switch(action.type){
        case SUCCES_LOGIN:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
                auth:true,
                success:action.payload.success,
                serverMessage: action.payload.msg,
                isReload:false
            }

        case SET_ADMIN:
            return{
                ...state,
                authLoad:action.payload.auth,
                adminAuth:true,
                userAuth:false,
                success:action.payload.success,
            }
        case SET_USER:
            return{
                ...state,
                authLoad:action.payload.auth,
                adminAuth:false,
                userAuth:true,
                success:action.payload.success,
    
            }
        case SET_ALL:
                return{
                ...state,
                allAuth:action.payload,
                success:action.payload.success,
                }
        case SUCCES_REGISTER:
            return{
                ...state,
                success:action.payload.success,
                serverMessage: action.payload.msg

            }


         case DELETE_AUTH:
                return{
                    ...state,
                    success:action.payload.success,
                    serverMessage:action.payload.msg
                }
        
        case LOG_OUT:
        case CHANGE_PASSWORD:
            localStorage.removeItem('token')
              return{
                auth: false,
                authLoad:{},
                allAuth: [],
                adminAuth:false,
                userAuth:false,
                success: false,
                serverMessage:null,
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
   case  SEND_FORGET_REQUEST:
    case   RESET_REQUEST:
   
            return{
                ...state,
                success:action.payload.success,
                serverMessage: action.payload.msg

            }

        default:
            return state
    }
}
