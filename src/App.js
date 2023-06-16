
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import HomePageProducts from './components/HomePageProducts'
import BottomSection from './components/BottomSection'
import Footer from "./components/Footer";


function App() {
  return (

      <div className="container mx-auto w-[1440px]">

          <Header />
          <Hero />
          <HomePageProducts />
          <BottomSection />
          <Footer />


      </div>

  )


}

export default App;
