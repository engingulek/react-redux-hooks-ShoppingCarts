import db from "../../firebase/firebase";


export function getCartListSuccess() {
  return function (dispatch) {
    const cartproductItems = [];
    db.collection("card").onSnapshot((onSnapshot) => {
     
      onSnapshot.forEach((product) => {
        cartproductItems.push(product.data());
      });
    //   initialState.cartList.push(cartproductItems)
    });
    dispatch({ type: "GETCARTLIST", payload:cartproductItems});
  };
}
