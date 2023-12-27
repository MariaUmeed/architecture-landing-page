import Navbar from './compunent/sharing/Navbar/page.js'
import Footer from './compunent/wejets/Footer/page.js'
import Hero from './compunent/wejets/HeroSection/page.js'
import Gallery from '@/app/compunent/wejets/Gallery/page.js'
import Features from "@/app/compunent/features/page.js"
import Consultation from '../app/compunent/wejets/Consultation/page.js'


export default function Home() {
  return (
    <>
   
    <Navbar/>
    <Hero/>
    <Gallery/>
    <Features/>
    <Consultation/>
    <Footer/>
   
    
    </>
  )
   
}
