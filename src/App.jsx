import React from 'react'
import Item from './components/Item'
import './App.css'
import Cart from './components/Cart'

function App(props) {
  

  return (
    <div className='App'>
     <Item name="Samsung Galaxy M52 5G" price={38000}/>
     <Item name="Iphone 15pro Max"price={167000}/>
     <Cart/>
         </div>
  )
}

export default App
