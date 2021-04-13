import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import * as actions from "../redux/actions/actions";
import {Link} from "react-router-dom"

function CardDesigns() {
  const dispatch = useDispatch();
  dispatch(actions.getProductListSuccess());

  const cartListSelector = useSelector((state) => state.cardRed);

  const addCartProduct = (addProduct)=>{
    dispatch(actions.addCartListSuccess(addProduct))
    

  }



  return (
    <Container>
    <Link to="/cart">
    <CartButton>
    Cart
    </CartButton>
    </Link>
 
    <PageTitle>
    Product List
    </PageTitle>
<ProductList>
{
  cartListSelector.cartList.map((cardItem)=>(
    <CardProdcutContainer key={cardItem.productId}>
    <CardImg src={cardItem.productData.img}/>
    <CardTitle>
    {cardItem.productData.name}
    </CardTitle>
    <CardDescription>
    {cardItem.productData.decription}
    </CardDescription>
    <CardPrice>
    {cardItem.productData.price}
    </CardPrice>
    <CardButton onClick={()=>addCartProduct(cardItem)}>
    Add to Cart
    </CardButton>

    
    
    </CardProdcutContainer>

  ))
}

</ProductList>
   

 

    </Container>
  );
}

const Container = styled.div`
display:flex;

margin-top:100px;
flex-direction:column;
justify-content:space-evenly;
flex-wrap:wrap;
align-items:center;


`

const CartButton = styled.button`
font-size:23px;
padding:10px 35px;
border:none;
border-radius:10px;
background-color:#f58634;
color:white;
`


const PageTitle = styled.div`
font-size:30px;



`

const ProductList = styled.div`
display:flex;

margin-top:70px;
flex-direction:row;
justify-content:space-evenly;
flex-wrap:wrap;`;
const CardProdcutContainer = styled.div`
display:flex;
flex-direction:column;
border:3px solid lightgray;
border-radius:20px;
padding:20px;
margin-left:30px;
justify-content:space-evenly;
align-items:center;


`;
const CardImg = styled.img`
width:200px;
height:180px;
margin-bottom:30px;

`;
const CardTitle = styled.div`
margin-bottom:10px;
font-weight:500px;
font-size:20px;

`

;
const CardDescription = styled.div`
width:200px;
font-size:15px;
margin-bottom:10px;

font-weight:600px;
`
const CardPrice = styled.div`
margin-bottom:30px;
font-size:20px;
font-weight:600px;
`;
const CardButton = styled.button`
border:none;
border-radius:5px;
background-color:green;
padding:10px 30px;
color:white;
:hover{
  background-color:#9ede73;
}


`;




export default CardDesigns;
