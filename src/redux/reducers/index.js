import * as types from "../actions/ActionTypes";
const initialState = {
    universities:[],
}

const UniReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.FETCH_UNIVERSITIES:
            return{
                ...state,
                universities: action.payload,
            }
        default:
            return state;    
    }
}

export default UniReducer;