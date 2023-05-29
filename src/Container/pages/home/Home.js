import React from 'react'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Blockchain from '../../components/blockchains/Blockchain'
import BuildScale from '../../components/buildandscalesection/BuildScale'
import DigitCount from '../../components/countdata/DigitCount'
import HeroSection from '../../components/mainsection/herosection/HeroSection'
import MarqueSection from '../../components/mainsection/marquesection/MarqueSection'

import './home.css'
import Upcomingupgrades from '../../components/upcomingupgrades/Upcomingupgrade'
import Driving from '../../components/drivingweb3adoption/Driving'
import Environment from '../../components/envcare/Environment'
import Applications from '../../components/application/Applications'
import Compeople from '../../components/community/compeople'
import Blockovia from '../../components/blockoviaexplore/Blockovia'
import Footer from '../../common/footer/Footer'
// import Applications from '../../components/application/Applications'
const Home = () => {
  return (
    <div>
       <header className='header_content'>
         <Header />
         <Navbar />  
       </header>
       <main className='main_content'>
           <HeroSection/>
           <MarqueSection/>
           <BuildScale />
           <DigitCount />
           <Blockchain />
           <Applications/>
           <Upcomingupgrades />
           <Driving />
           <Environment />
           <Compeople />
           <Blockovia />
       </main>
       <footer className='main_content'>
        <Footer />
       </footer>
    </div>
  )
}
export default Home