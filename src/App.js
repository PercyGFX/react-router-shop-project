
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import HomePageProducts from './components/HomePageProducts'
import BottomSection from './components/BottomSection'
import Footer from "./components/Footer";
import Product from "./components/Product";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (

      <div className="container mx-auto w-[1440px]">

          <BrowserRouter>


          <Header />
          <Hero />

             <Routes>
                 <Route path="/" element={<HomePageProducts />} />
                 <Route path="/product/:id" element={<Product />} />
             </Routes>


          <BottomSection />
          <Footer />

          </BrowserRouter>


      </div>

  )


}

export default App;
