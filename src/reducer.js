const initalState={
    data:[]
}

const dataReducer=(state=initalState,action)=>{
    switch(action.type){
        case "ADD_DATA":
            return{
                ...state,
                data:[...state.data,action.payload]
            };
            default:return state;}};

export default dataReducer;