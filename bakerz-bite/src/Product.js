import './App.css';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ShowCart from './components/ShowCart';
import logo from './assets/images/logo.jpg';
import { useState, useEffect,  } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';



const PRODUCT_LIST = [
  { id: 1, name: "iPhone 15 Pro max", price: "29,790,000đ", originalPrice: "34,900,000đ", discount: "-14%", storage: ["256GB", "512GB", "1TB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-1-2-650x650.png" },
  { id: 2, name: "iPhone 15 Pro", price: "25,690,000đ", originalPrice: "28,990,000đ", discount: "-11%", storage: ["128GB", "256GB", "512GB", "1TB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/299033/s16/iphone-15-pro-white-1-2-650x650.png" },
  { id: 3, name: "iPhone 15 Plus", price: "22,490,000đ", originalPrice: "25,990,000đ", discount: "-13%", storage: ["128GB", "256GB", "512GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/303891/s16/iphone-15-plus-pink-1-2-650x650.png" },
  { id: 4, name: "iPhone 15", price: "19,790,000đ", originalPrice: "22,990,000đ", discount: "-13%", storage: ["128GB", "256GB", "512GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/281570/s16/iphone-15-yellow-650x650.png" },
  { id: 5, name: "iPhone 14 Pro max", price: "26,990,000đ", originalPrice: "29,490,000đ", discount: "-8%", storage: ["128GB", "256GB", "512GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/251192/s16/iphone-14-pro-max-purple-650x650.png" },
  { id: 6, name: "iPhone 14 Pro", price: "27,490,000đ", originalPrice: "29,490,000đ", discount: "-6%", storage: ["128GB", "256GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/289691/s16/iphone-14-pro-purple-1-650x650.png" },
  { id: 7, name: "iPhone 14 Plus", price: "19,590,000đ", originalPrice: "22,290,000đ", discount: "-12%", storage: ["128GB", "256GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/245545/s16/iphone-14-plus-blue-1-2-650x650.png" },
  { id: 8, name: "iPhone 14", price: "17,690,000đ", originalPrice: "19,090,000đ", discount: "-7%", storage: ["128GB", "256GB", "512GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/240259/s16/iphone-14-purple-650x650.png" },
  { id: 9, name: "iPhone 13", price: "14,690,000đ", originalPrice: "17,790,000đ", discount: "-17%", storage: ["128GB", "256GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/223602/s16/iphone-13-pink-1-2-3-650x650.png" },
  { id: 10, name: "iPhone 12 ", price: "11,190,000đ", originalPrice: "13,090,000đ", discount: "-8%", storage: ["64GB", "128GB", "256GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/213031/s16/iphone-12-white-1-2-3-650x650.png" },
  { id: 11, name: "iPhone 11 ", price: "8,590,000đ", originalPrice: "11,790,000đ", discount: "-27%", storage: ["64GB", "128GB"], image: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-white-1-2-3-650x650.png" },
];
 
function App() {
 
   const handleAddcart =  (pro) =>{
    setCart([...cart,pro]);
   }
   const handleDelete = (id) => {
    const newlist = list.filter(pro => pro.id !==id);
    setList(newlist);
  }
  const [list, setList] = useState([...PRODUCT_LIST]);
  const [cart, setCart] = useState([])
  

  const navigate= useNavigate();
  const[accList, setAccList] = useState([]);
    useEffect(()=>{
    fetch("accounts.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAccList(data);
    })
    .catch(error => console.error("error get list account", error))
  }, []);
  
   const CheckLogin = (username,password) =>{
    const acc = accList.filter
    (a=> a.username === username && a.password===password);
    if(acc.length==1){
      localStorage.setItem("username", username);
      navigate('/'); //chuyển trang
      window.alert("Bạn đã đăng nhập thành công")
      console.log("đăng nhập thành công")    
    }else{
      window.alert("Nhập lại tài khoản")
      console.log("login không thành công")
    }

  }
  return (
    <div className="App">
       <section>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Login' element={<Login CheckLogin={CheckLogin}/>}/>
          <Route path='Product' element={<Product list={list} handleAddcart={handleAddcart}/>}/>
          <Route path='Cart' element={<ShowCart list={cart} handleDelete={handleDelete}/>}/>
        </Routes>
      </section>
      </div>
  );
}

export default App;
