import { ADD_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEE_DETAILS, UPDATE_EMPLOYEE } from "./actions";
import axios from 'axios'

export const getEmployeeDetails = () =>{
    return (dispatch) =>{
        axios.get(`https://api.github.com/users`)
        .then(response =>{
            dispatch({
                type:GET_EMPLOYEE_DETAILS,
                payload:response.data
            })
        })
        .catch(err => console.log(err))
    }
}
export const addEmployee = (payload) =>{
return {
    type:ADD_EMPLOYEE,
    payload
}
}
export const deleteEmployee = (id) =>{
return {
    type:DELETE_EMPLOYEE,
    payload:id
}
}
export const updateEmployee = (payload) =>{
return {
    type:UPDATE_EMPLOYEE,
    payload
}
}