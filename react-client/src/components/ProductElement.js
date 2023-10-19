import React from 'react';

const ProductElement = ({ product,  index, productDetailData, handleCheckout, 
  setViewUpdate, getIndex, setInputName,setInputImage, setInputPrice,setInputDescription,setInputCategories}) => {
  return ( <div className='product-card'>
      <img src={product.imageUrl} alt='img description' onClick={()=>{
        productDetailData(index);
        }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className='card-item-price'>{product.price} $</p>
      <p className='card-item-cat'>{product.categories}</p>
      <div className='product-card-buttons'>
        <button onClick={()=>{
          setViewUpdate(false);
          getIndex (index);
          setInputName(product.name);
          setInputImage(product.imageUrl);
          setInputPrice(product.price);
          setInputDescription(product.description);
          setInputCategories(product.categories);





        }}>Update Product</button>
        <button>Delete Product</button>
        <button onClick={()=>{
          handleCheckout(index);
          }}>Add to Cart</button>
      </div>
    </div>)
      
    
  
};

export default ProductElement;
