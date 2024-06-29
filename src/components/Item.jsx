// import React, { useContext } from "react";

// import { CartContext } from "../context/Cart";

// const Item = (props) => {
//     const cart = useContext(CartContext);

  
//     return (
//         <div className="item-cart">
//             <h4>{props.name}</h4>
//             <h4>Price: {props.price}</h4>
//             <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price },])}>Add to Cart</button>
//         </div>
//     )
// }
// export default Item;



//WITH BEST PRACTICE

import React from "react";

import { useCart } from "../context/Cart";

const Item = (props) => {
    const cart = useCart();

  
    return (
        <div className="item-cart">
            <h4>{props.name}</h4>
            <h4>Price: {props.price}</h4>
            <button onClick={() => cart.setItems([...cart.items, { name: props.name, price: props.price },])}>Add to Cart</button>
        </div>
    )
}
export default Item;