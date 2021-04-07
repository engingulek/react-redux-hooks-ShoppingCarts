import initialState from "../reducers/initialState"

export function getCartListSuccess()
{
    return function (dispatch)
    {
        dispatch({type:"GETCARTLIST",payload:initialState.cartList})
    }
}