

import './App.css';
import CardDesigns from './components/CardDesings';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from "./redux/actions/actions"
import { useEffect } from 'react';



function App() {
  
  // const dispatch = useDispatch()
  
  // dispatch(actions.getCartListSuccess())
  // const cartList = useSelector(state => state.cartRed)

 
// const getCartList = ()=>{

 
//   console.log(cartList);
// }

// useEffect(() => {
//  getCartList()
// },)

const dispatch = useDispatch()
dispatch(actions.getCartListSuccess())
  const cartListSelector = useSelector(state => state.cardRed)
  
  useEffect(() => {
console.log(cartListSelector.cartList)



   
  }, )



  return (
    <div className="app">
    
   <CardDesigns/>
    
      
    </div>
  );
}

export default App;
