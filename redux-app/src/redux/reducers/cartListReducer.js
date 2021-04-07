 const cartListReducer =(state={
    cartList:[]
 },action)=>{
     if(action.type==="GETCARTLIST")
      {       state={...state,cartList:action.payload}

    }
    return state;
    

 }

  export default cartListReducer;

//  export default function cartListReducer (state=initialState.cartList,action)
//  {
//      switch (action.type) {
//          case "GETCARTLIST":
            
//             return action.payload
                
        
    
//         default:
//         return state
//      }
//  }
