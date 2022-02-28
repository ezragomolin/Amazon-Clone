import React from 'react'
import './Checkout.css'
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">

        <div className="checkout_left">
            <img className="checkout_ad" src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-768x164.png"/>
            <div>
                <h2 className="checkout_title">Your Shopping Cart</h2>
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout