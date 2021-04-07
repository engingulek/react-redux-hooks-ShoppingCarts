import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  
  } from 'reactstrap';
import * as actions from "../redux/actions/actions"

  import "./CardDesing.css"

function CardDesigns() {
  const dispatch = useDispatch()
  dispatch(actions.getCartListSuccess())
  const cartList = useSelector(state => state.cardRed)
  console.log(cartList)

  

    return (
      <div className="app">
      {

        cartList.cartList.map((item,index)=>(
          <div className="cardDesign" key={index} >
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{item}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
         
        ))
      }
      
      
      </div>
        
    )
}

export default CardDesigns
