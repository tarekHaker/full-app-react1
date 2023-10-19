import React, { useState, useEffect } from 'react';
import ProductElement from './ProductElement';
import axios from 'axios';

const ProductsList = ({ selectedCategory,  productName,setView, setproductDetail,   }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [viewUpdate, setViewUpdate] = useState(true);
  const [iup, setIndexUpdate] = useState(0);
  const [inputImage, setInputImage] = useState("");
  const [inputName, setInputName] = useState("")
  const [inputPrice, setInputPrice] = useState("");
  const [inputDecription, setInputDescription] = useState("");
  const [inputCategories, setInputCategories] = useState("");
  const[render, setRender] = useState(false);

  

  const getIndex = (i)=>{
    setIndexUpdate(i)
  }

  const productDetailData =(index)=>{
    setproductDetail(allProducts[index]);
    setView("details")
  };


  const handleCheckout = (i)=>{
    axios.post('http://Localhost:5000/api/products/addcartlist', {
          name: allProducts[i].name,
          price: allProducts[i].price
         
         })
         .then(({res})=>{console.log(res)})
         .catch((err)=>{console.log(err)})

  }

  



  useEffect(() => {
    axios.get('http://localhost:5000/api/products/getAll')
      .then(({ data }) => {
        setAllProducts(data);
        setOriginalProducts(data); 
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      
      const filteredProducts = originalProducts.filter(product => product.categories === selectedCategory);
      setAllProducts(filteredProducts);
    } else {
    
      setAllProducts(originalProducts);
    }
  }, [selectedCategory, originalProducts]);

  useEffect(() => {
    if (productName) {
      
      const filteredProducts = originalProducts.filter(product => product.name === productName);
      setAllProducts(filteredProducts);
    } else {
    
      setAllProducts(originalProducts);
    }
  }, [productName, originalProducts]);


  return (
    viewUpdate?(
      <div>
      <div className='products-list'>
        {
          allProducts.map((product, index) => (
            <ProductElement key={index}
            index ={index}
            product={product} 
            setView={setView} 
            productDetailData={productDetailData}
            handleCheckout= {handleCheckout}
            setViewUpdate ={setViewUpdate}
            getIndex ={getIndex }
            setInputName={setInputName}
            setInputImage={setInputImage}
            setInputPrice={setInputPrice}
            setInputDescription={setInputDescription}
            setInputCategories={setInputCategories}
            

             />
          ))
        }
        </div>
        </div>
   
  ):(
    <form style={{
      height:'400 px',
      margin: '100px',
      padding:'20px',
     
      border: '2px solid black'
    }}>
     
    
    
      Image:  <br/>
      {console.log(allProducts)}
      <input type='text' style={{width:"80%"}} value={inputImage} onChange={(e)=>{setInputImage(e.target.value)}}/>
      <br/>
      Name: <br/>
      <input type='text' style={{width:"80%"}}  value={inputName} onChange={(e)=>{setInputName(e.target.value)}}/>
        <br/>
        Description:<br/>
      <input type='text' style={{width:"80%"}}  value={inputDecription} onChange={(e)=>{setInputDescription(e.target.value)}}/>
      <br/>
      Price: <br/>
      <input type='text' style={{width:"80%"}}  value={inputPrice} onChange={(e)=>{setInputPrice(e.target.value)} }/>
      <br/>
      Categories:
      <br/>
      <input type='text'style={{width:"80%"}}  value={inputCategories} onChange={(e)=>{setInputCategories(e.target.value)}}/>
      <br/>
        <button style={{margin:'20px'}} onClick={(e)=>{
          e.preventDefault();
          
    

          setViewUpdate(true);
          axios.put(`http://Localhost:5000/api/products/update/${allProducts[iup]._id}`,{
            imageUrl: inputImage,
            name: inputName,
            description: inputDecription,
            price: inputPrice,
            categories: inputCategories
          })
          .then(({res})=>{console.log(res)})
          .catch((err)=>{console.log(err)});

          setRender(!render);
        
        }}>Update</button><br/>
    </form>
  )

  )
    
};

export default ProductsList;


