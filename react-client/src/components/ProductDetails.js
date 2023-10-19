import React from 'react'

const ProductDetails = ({productDetail,cartListData,setCartListData}) => {
 
      return (
        <div className="product-details">
          <div className="product-image">
            <img src={productDetail.imageUrl} />
          </div>
          <div className="product-info">
            <h1>{productDetail.name}</h1>
            <p>{productDetail.description}</p>
            <h2>{productDetail.price} $</h2>
            <button onClick={()=>{setCartListData([...cartListData,productDetail])}}>Add to Cart</button>
          </div>
        </div>
      );
}

export default ProductDetails