import db from "../../firebase/firebase";

export function getProductListSuccess() {
  return function (dispatch) {
    const cartproductItems = [];
    db.collection("card").onSnapshot((onSnapshot) => {
      onSnapshot.forEach((product) => {
        cartproductItems.push({
          productId: product.id,
          productData: product.data(),
        });
      });
      dispatch({ type: "GETPRODUCTLIST", payload: cartproductItems });
    });
  };
}

export function getCartListSuccess ()
{
  return function(dispatch){
    const cartList =[]
    db.collection("addCartList").onSnapshot((onSnapshot)=>{
      onSnapshot.forEach((addProduct)=>{
        cartList.push({
          addProductId: addProduct.id,
          addProductData: addProduct.data()
        });

      });
      dispatch({type:"GETCARTLIST",payload:cartList});

    });
  };

}

export function decrement (product)
{
 
  return function (dispatch)
  {
    db.collection("addCartList").doc(product.addProductId).update({
      addCartProductQuantity:product.addProductData.addCartProductQuantity-1

     })

  }
}


export function increment (product)
{
  return function (dispatch)
  {
     db.collection("addCartList").doc(product.addProductId).update({
       addCartProductQuantity:product.addProductData.addCartProductQuantity+1

     })

  }
}





export function addCartListSuccess(addCartProduct) {
  return function (dispatch) {
    const addCartItem = db
      .collection("addCartList")
      .doc(addCartProduct.productId);

    addCartItem.get().then((doc) => {
      if (doc.exists) {
        addCartItem.update({
          addCartProductQuantity: doc.data().addCartProductQuantity + 1,
        });
      } else {
        db.collection("addCartList").doc(addCartProduct.productId).set({
          addCartProductName: addCartProduct.productData.name,
          addCartProductPrice: addCartProduct.productData.price,
          addCartProductQuantity: addCartProduct.productData.quantity,
          addCartProductImg: addCartProduct.productData.img
          
        });
      }
    });
  };
}



