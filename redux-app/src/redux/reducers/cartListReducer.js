const cartListReducer =(state={
    cartList:[]
},action)=>{
    if(action.type==="GETCARTLIST")
    {
        state={...state,cartList:action.payload}

    }
    return state;
    

}

export default cartListReducer;