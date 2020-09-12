import {
    CLEAR_SUCCESS,
        ERROR,
        CLEAR_ERROR,
        GET_PROFILE,
        ADD_PROFILE,
        EDIT_PROFILE,
        DELETE_PROFILE

} from '../type'

export default (state,action)=>{
    switch(action.type){
        case ADD_PROFILE:
            return{
                ...state,
                profile:action.payload.createdProfile,
                success:action.payload.success,
                serverMessage: action.payload.msg,
            }

        case GET_PROFILE:
            return{
                ...state,
                profile:action.payload.profile,
                success:action.payload.success,
                serverMessage: action.payload.msg,
            }


         case DELETE_PROFILE:
                return{
                    ...state,
                    success:action.payload.success,
                    serverMessage:action.payload.msg
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
