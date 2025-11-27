import './index.css'
import './App.css'
import NavBar from './components/layout/navbar/NavBar'
import Hero from './components/ui/hero/Hero'
import Grid from './components/ui/gridlayout/Grid'
import CarouselCards from './components/ui/carouselCards/CarouselCards'
import Why700 from './components/ui/why700/Why700'
import Footer from './components/layout/Footer'




function App() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <Grid />
      <CarouselCards />
      <Why700 />
      <Footer />
    </>
  )
}

export default App
