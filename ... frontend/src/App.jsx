import { BrowserRouter , Routes , Route} from "react-router-dom";
import { LoginPage , SignupPage , Home, CreateProduct, MyProducts, Cart } from "./Routes.jsx";
import './App.css' ;
import React from "react";
function App (){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/create-product" element={<CreateProduct />}/>
      <Route path="/my-products" element={<MyProducts />}/>  
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/cart" element={<Cart />} />

    
    </Routes>
    </BrowserRouter>
  )
}
export default App;