// import React, {useContext}from 'react'
// import { CartContext } from '../context/Cart'
// const Cart = () => {
//     const cart = useContext(CartContext);

//     const total = cart.items.reduce((a, b)=> a + b.price, 0);
//   return (
//     <div className='cart'>
//         <h2>Cart</h2>
//     {cart && cart.items.map((item)=>(
//         <ul>
//             {item.name} {item.price}
//             </ul>
//     ))}
      


//       <h5>Total bill: ${total}</h5>
//     </div>
//   )
// }

// export default Cart


//WITH BEST PRACTICE
import React from 'react'
import { useCart } from '../context/Cart';


const Cart = () => {
    const cart = useCart();
    const total = cart.items.reduce((a, b)=> a + b.price, 0);
  return (
    <div className='cart'>
        <h2>Cart</h2>
    {cart && cart.items.map((item)=>(
        <ul>
            {item.name} {item.price}
            </ul>
    ))}
      


      <h5>Total bill: ${total}</h5>
    </div>
  )
}

export default Cart

