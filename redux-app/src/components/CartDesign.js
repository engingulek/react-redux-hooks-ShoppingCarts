import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "../redux/actions/actions";
import DeleteIcon from '@material-ui/icons/Delete';
function CartDesign() {
  const dispatch = useDispatch();
  dispatch(actions.getCartListSuccess());
  const cartListSelector = useSelector((state) => state.cardRed);
 // {
            //     addProduct.addProductData.addCartProductQuantity.length===1?
            //     <DecrementButton>-</DecrementButton>:
            //     <DecrementButton>
            //     <DeleteIcon />
            //     </DecrementButton>
                

            // }
  return (
    <Container>
      <HomePageButton>Home</HomePageButton>
      <Title>
      Cart List
      </Title>

      <CartList>
        {cartListSelector.cartList.map((addProduct) => (
          <CartDesingContainer>
            <CartImage src={addProduct.addProductData.addCartProductImg} />

            <CartName>{addProduct.addProductData.addCartProductName}</CartName>
            <CartPrice>
              {addProduct.addProductData.addCartProductPrice}
            </CartPrice>
            <CartQuantityContainer>
           
            <DecrementButton onClick={()=>dispatch(actions.decrement(addProduct))}>-</DecrementButton>
              <CartQuantity>
                {addProduct.addProductData.addCartProductQuantity}
              </CartQuantity>
              <IncrementButton onClick={()=>dispatch(actions.increment(addProduct))} >+</IncrementButton>
            </CartQuantityContainer>
          </CartDesingContainer>
        ))}
      </CartList>
    </Container>
  );
}

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const HomePageButton = styled.button`
font-size:23px;
padding:10px 35px;
border:none;
border-radius:10px;
background-color:#f58634;
color:white;
margin-top:30px;
margin-bottom:20px;

`;
const Title = styled.div`
font-size: 30px;


`
const CartList = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-right:40px;
flex-wrap:wrap;
`;
const CartDesingContainer = styled.div`
display:flex;
flex-direction:column;
border:3px solid lightgray;
border-radius:20px;
padding:20px;
margin-left:30px;

align-items:center;
`;
const CartImage = styled.img`
width:200px;
height:180px;
margin-bottom:30px;

`;
const CartName = styled.div`
margin-bottom:10px;
font-weight:500px;
font-size:20px;`;
const CartPrice = styled.div`
margin-bottom:20px;
font-size:20px;
font-weight:600px;`;
const CartQuantityContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;

`;
const ButtonDesign = styled.button`
border:none;
padding:5px 10px;
border-radius:5px;
background-color:#126e82;
color:white;



`
const DecrementButton = styled(ButtonDesign)`
margin-right:10px;

`;
const CartQuantity = styled.div``;
const IncrementButton = styled(ButtonDesign)`
margin-left:10px;

`;

export default CartDesign;
