import React, { useEffect ,Fragment } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Container/pages/home/Home'
import Builddev from './Container/components/buildandscalesection/pages/Builddev'
import Scalestaking from './Container/components/buildandscalesection/pages/Scalestaking'
import Privacy from './Container/components/privacypolicy/Privacy'
import Cookies from './Container/components/cookiespolicy/Cookies'
import Applications from './Container/components/dropdownsExplore/Applicationdropdown'
import Whyblockovia from './Container/components/dropdownsExplore/WhyBlockovia'
import Utility from './Container/components/dropdownsExplore/Utilityeconomics'
import Carbonfootprint from './Container/components/dropdownsExplore/Carbonfootprint'
import Roadmap from './Container/components/dropdownsExplore/Roadmap'
import Ecosystem from './Container/components/dropdownsExplore/network/Ecosystem'
import Blog from './Container/components/dropdownContent/Blog'
import Ambassador from './Container/components/dropdownCommunity/Ambassador'
import Coreteam from './Container/components/dropdownCommunity/Coreteam'
import Presskit from './Container/components/dropdownCommunity/Presskit'
import Socialplatforms from './Container/components/dropdownCommunity/Socialplatforms'
import Upcomingevents from './Container/components/dropdownCommunity/Upcomingevents'
import Fundingprogram from './Container/components/dropdownBuild/Fundingprogram'
import Devportal from './Container/components/dropdownBuild/devspace/Devportal'
import Applicationsdriving from './Container/components/drivingweb3adoption/pages/Applications'

import Aos from 'aos';
import 'aos/dist/aos.css';
import VerticalMode from './Container/components/slickslider/slick'
import AdoptionSlider from './Container/components/adoptionslider/adoptionslider'


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useEffect(() => {
    Aos.init({
        duration: 1000, // Animation duration
        offset: 200, // Offset (in pixels) from the original trigger point
        easing: 'ease-in-out', // Easing function
        delay: 200, // Delay between animations
        once: true, // Whether to only run the animation once
      });

  }, []);

  return (
    <Fragment>
       <BrowserRouter>
         <Routes>
         {/* <Route path='/' exact component={Home} /> */}

           <Route path='/' element={<Home />} />
           <Route path='/developers' element={<Builddev />}/>
           <Route path='/staking' element={<Scalestaking />} />
           <Route path='/applications' element={<Applications/>}/>
           <Route path='/privacy-policy' element={<Privacy/>}/>
           <Route path='/cookies-policy' element={<Cookies/>}/>
           <Route path='/why-blockovia' element={<Whyblockovia/>}/>
           <Route path='/roadmap' element={<Roadmap/>}/>
           <Route path='/utility-economics' element={<Utility/>}/>
           <Route path='/carbon-footprint' element={<Carbonfootprint/>}/>
           <Route path='/ecosystem' element={<Ecosystem/>}/>
           <Route path='/blog' element={<Blog/>}/>
           <Route path='/ambassador' element={<Ambassador/>}/>
           <Route path='/core-team' element={<Coreteam/>}/>
           <Route path='/press-kit' element={<Presskit/>}/>
           <Route path='/social-platforms' element={<Socialplatforms/>}/>
           <Route path='/upcoming-events' element={<Upcomingevents/>}/>
           <Route path='/funding-program' element={<Fundingprogram/>}/>
           <Route path='/devportal' element={<Devportal/>}/>
           <Route path='/use-cases' element={<Applicationsdriving/>}/>
           <Route path='/social-platfoms' element={<Socialplatforms/>}/>
           <Route path='/slick-slider' element={<VerticalMode/>}/>
           <Route path='/adoption-slider' element={<AdoptionSlider/>}/>

         </Routes>
         <ToastContainer/>
       </BrowserRouter>
    </Fragment>
  )
}

export default App