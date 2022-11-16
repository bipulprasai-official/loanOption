import * as types from "./ActionTypes";
import axios from  "axios";




const getAllUni = (unis) => ({
    type:types.FETCH_UNIVERSITIES,
    payload:unis
})   
// fetch all list of universities from api
export const LoadAllUnis = () => {
    return function (dispatch){
        axios.get("http://universities.hipolabs.com/search?country=Australia").then((res)=>{
            // console.log(res);
            dispatch(getAllUni(res.data));
        }).catch((error) =>console.log(error))
    }
    }

    export const ADDUnis = (firstArr) =>{
     // console.log({"FirstID":firstArr})
    return{
        type:types.ADD_UNIVERSITY,
        payload:firstArr
    }
    
    }    
