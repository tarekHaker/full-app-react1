
import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import { useState } from 'react'
import CartList from './components/CartList';

const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const [selectedCategory, setSelectedCategory] = useState(null);
const [productName,setProductName] = useState("");
const [productDetail, setproductDetail] = useState([]);
const [cartListData, setCartListData] = useState([]);
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x) => {
  setView(x)
}


  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>{setSelectedCategory(null);
          setProductName("");
          setView("productList")
          }
          }>TEK STORE</span>
          { view ==="productList" &&<Search setProductName={setProductName} />}
        { view ==="productList" && <span className="items" onClick={toggleMenu}>
          &#9660;
            CATEGORIES
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick={()=>setSelectedCategory("computers")}>computers</span>
            <span className='menu-item' onClick={()=>setSelectedCategory("phones")}>phones</span>
            <span className='menu-item' onClick={()=>setSelectedCategory("electronics")}>electronics</span>
          </div>}
          {view ==="productList" && 
          <ProductsList productName={productName} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          setView={setView}
          setproductDetail={setproductDetail}
          productDetail={productDetail}
          setCartListData={setCartListData}
          cartListData ={cartListData}
            />}
          {view ==="cart"&&<CartList 
            cartListData={cartListData}
          />}   
          {view==="details" && <ProductDetails 
          productDetail={productDetail}
          cartListData={cartListData}
          setCartListData={setCartListData}
           />}
           <button>Add a new product</button>
    </div>
  );
}

export default App;
