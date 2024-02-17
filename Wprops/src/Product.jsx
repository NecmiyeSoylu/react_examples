import React from 'react'

function Product({ productName, price }) {
    //destructing
    //const { productName, price } = props
    //hatta daha kral hareket direkt paremetre olarak alırız
    return (
        <div>
            <div>Product</div>
            <div>
                <div>
                    product name: {productName}
                </div>
                <div>
                    Price : {price} tl
                </div>
            </div>
        </div>
    )
}

export default Product
