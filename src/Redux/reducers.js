import { updateEmployee } from "./actionCreators";
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEE_DETAILS } from "./actions";

const initialState ={
    data:[]
}

const reducer = (state=initialState,action)=>{
switch(action.type) {
    case GET_EMPLOYEE_DETAILS:
        return {
            ...state,
            data:[...action.payload]
        }
        case ADD_EMPLOYEE:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }
            case DELETE_EMPLOYEE:
                return{
                    ...state,
                    data: state.data.filter((val) => val.id !== action.payload)
                }
                case updateEmployee:
                    return {
                        ...state,
                        data:state.data.filter((val) => val.id !== action.payload.id).concat(action.payload.value)
                    }

    default:
        return state
}
}

export default reducer