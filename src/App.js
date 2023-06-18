
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import HomePageProducts from './components/HomePageProducts'
import BottomSection from './components/BottomSection'
import Footer from "./components/Footer";
import Product from "./components/Product";
import Login from "./components/Login"
import AddProduct from "./components/AddProduct";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Popup from "reactjs-popup";
import AuthReq from "./components/AuthReq"

function App() {

    const [showPopup, setShowPopup] = React.useState(false);
    const [popup, setpopup] = React.useState("")

    function handleclose(event) {

        setShowPopup(false)
    }



    return (

      <div className="container mx-auto w-[1440px]">

          <BrowserRouter>


          <Header />
          <Hero />
              <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                  <div className="bg-amber-100 py-6 px-3 text-center mx-auto shadow-xl" >

                      <p className="font-poppins font-semibold text-xl">{popup}</p>

                      <button className="bg-blue-700 text-white font-poppins font-semibold py-3 px-4 mt-5" onClick={handleclose}>Close</button>
                  </div>
              </Popup>

             <Routes>
                 <Route path="/" element={<HomePageProducts />} />
                 <Route path="/product/:id" element={<Product />} />
                 <Route path="/login" element={<Login
                     setShowPopup={setShowPopup}
                     setpopup={setpopup}
                 />} />
                 <Route element={<AuthReq />}>
                 <Route path="/addproduct" element={<AddProduct
                     setShowPopup={setShowPopup}
                     setpopup={setpopup}
                 />} />
                 </Route>


             </Routes>


          <BottomSection />
          <Footer />

          </BrowserRouter>


      </div>

  )


}

export default App;
