import React from 'react'
import "./Home.css"
import Product from "./Product"
import Checkout from "./Checkout"

function Home() {
  return (
    <div className="home">
    {/*background image*/}
        <div className="home_container">
            <img className="home_image" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" />
    {/*Product Rows*/}
        <div className ="home_row1">
            <Product id="123" title="Iphone 13 Pro 64GB by Apple, Brand new with facotry seal (great deal)!" price={999.99} image="https://cdn.shopify.com/s/files/1/0179/5502/9092/products/iphone-xr-red_600x600.png?v=1588254528" rating={4} />
            <Product id="1234" title="Apple watch series 3 by Apple, Brand new with facotry seal!" price={359.99} image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&.v=1594259786000" rating={3}  />
            <Product id="12345" title="Homepod mini speaker by Apple, Brand new with facotry seal!" price={89.99} image="https://www.apple.com/v/homepod-mini/f/images/overview/sound_homepod_white__e5a2pshb9l26_large_2x.png" rating={5} />
        </div>
        <div className ="home_row2">
            <Product id="123456" title="Full size playset for your backyard, 5 activities to be played with friends and family!" price={2399.99} image="https://m.media-amazon.com/images/I/61bx4QwBa+L._AC_SL1500_.jpg" rating={4}  />
        </div>
        <div className ="home_row3">
            <Product id="1234567" title="Binder Pouch, 3 Ring Pencil Pouches, 12 Pack 12 Color Zipper Pencil Case Pencil Bags with Double Pocket for Storing School Supplies" price={23.99} image="https://m.media-amazon.com/images/I/81KwN0K0zIL._AC_SL1500_.jpg" rating={5}  />
            <Product id="12345678" title="Premium Quality Pencils In Bulk 150 Neon #2 Sharpened Wood Pencils for Kids and Adults" price={20.99} image="https://m.media-amazon.com/images/I/914jgBlkAaL._AC_SL1500_.jpg" rating={4}  />
        </div>
    </div>
    
</div>
  )
}

export default Home