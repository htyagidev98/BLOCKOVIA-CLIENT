import React from 'react'
import {BsArrowRight,BsBoxArrowUpRight,BsDot,BsFileArrowDown} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { NavLink} from 'react-router-dom'
import './privacy.css'
import Header from '../../common/header/Header'
import Navbar from '../../common/navbar/Navbar'
import Footer from '../../common/footer/Footer'

const Privacy = () => {
  return (
   <>
   
       <header className='header_content'>
        <Header/>
        <Navbar/>
       </header>


       <section className="privacy_section container-fluid pt-5 pb-5">
           <div className="row align-items-center">
            <div className="col-md-5 mx-auto">
                <div className="community_data_section" >
                    <span className='ms-4 text-white' style={{fontFamily:"Courier New"}}>Privacy Policy</span>
                    </div>
                    </div>
                    </div>
                    </section>
       <section className="privacy_centre container-fluid">
   {/* <NavLink to='staking' > */}

      <div className="row">

         <div className="col-md-6">
            <div className='privacy_right_data '>
            <span><strong className='ms-2 text-white' style={{fontFamily:"Courier New",textAlign:'center'}}>§1.</strong></span>
            <span>General Information</span>
<div className='privacy_para'>

<p>
 1. alephzero.org website (hereinafter: “Website”) is run by Aleph Zero Foundation with registered seat in Bergliweg 15, 6300 Zug, Switzerland, e-mail: hello@alephzero.org (hereinafter: “Controller”).
 </p>

 <p>
  2. As part of the Website activity, the data of the users of the Website (hereinafter: “Users”) may be collected, processed and used, including personal data.
 </p>
 <p>
 3. Users’ data may be collected as a result of: their voluntary provision by Users, the use of cookies and the Controller’s use of the tools described below.
 </p>

 <p>
  4. Additionally, information about the user’s IP address, the time of arrival of the request and sending a response, the website address from which the user was redirected to the Website and the type of software used by the user may be collected. This information is used for the purpose of administering the Website and for creating statistics and analyses.
 </p>
</div>
               
            
            </div>
         </div>

         {/* <div className="col-md-6">
            <div className="right_data">
            
             animation data
            </div>
         </div> */}
      </div>
      {/* </NavLink>  */}


      {/* PERSONAL DATA............................ */}
      <div className="row">

         <div className="col-md-6">
            <div className='privacy_right_data '>
            <span><strong className='ms-2 text-white' style={{fontFamily:"Courier New",textAlign:'center'}}>§2.</strong></span>
            <span>Personal Data</span>
<div className='privacy_para'>

<p>
 1. Controller of personal data is Aleph Zero Foundation with registered seat in Bergliweg 15, 6300 Zug, Switzerland, e-mail: hello@alephzero.org. </p>


 <p><BsDot/>contacting the User</p>
  <p><BsDot/>sending to the User a newsletter and providing commercial information via e-mail or phone,

  <p><BsDot/>statistics and analysis of Users’ behaviour on websites.</p>
 <p>
 2. Controller, may collect and process personal data through the Website for purposes such as:
 </p>
 <p>
 3. Controller may provide Users’ data to subcontractors (entities that he uses during the processing) such as service providers and IT solutions or entities providing IT services. </p>

 <p>
 4.Personal data is processed for a period that is each time indicated to the User in the relevant information submitted to him at the time of a data collection. In the case of data processed for the purpose of statistics and analysis of Users’ behavior on websites and for contact with the User, the Controller may process for a period of 3 years from the date of their collection.

</p>
<p>
  5. The data subject has the following rights:

  <p><BsDot/>right to access personal data and the right to receive a copy;
</p>
<p><BsDot/>right to rectification of the personal data;
</p>
<p><BsDot/>right to erasure of the personal data;
</p>
<p><BsDot/>right to restriction of processing concerning the personal data;
</p>
<p><BsDot/>right to portability of the personal data;
</p>
<p><BsDot/>right to object to processing of the personal data;
</p>
<p><BsDot/>right to lodge a complaint with a supervisory authority.
</p>
</p>

<p>6. By processing data, the Controller may use entities based in the USA. In consequence, the personal data may be transferred outside the European Economic Area. Controller uses only entities that are part of the EU-US Privacy Shield program and provide an adequate level of data protection.</p>
<p>7. In the event that the data is processed on the basis of consent, the User whose who is a data subject, also has the right to withdraw consent to the processing of personal data at any time. Withdrawal of consent does not affect the legality of the processing, which was made on the basis of consent before its withdrawal.</p>
 </p>
</div>
            </div>
         </div>
      </div>


      {/* COOKIES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

      <div className="row">
            <div className="col-md-6">
            <div className='privacy_right_data '>
            <span><strong className='ms-2 text-white' style={{fontFamily:"Courier New",textAlign:'center'}}>§3.</strong></span>
            <span>Cookies</span>
            <div className='privacy_para'>

            <p>
              1. As part of the functionality of the Website, small files called cookies are used. These files are saved by the server on end user’s computer. Using cookies should be understood as their storage and access to them by the Controller.            </p>

            <p>

              2. Cookies are IT data, in particular text files, which are stored in the User’s end device and are intended for the use of websites. Cookies usually contain the name of the website they come from, the time they are stored on the end device, content (e.g., share IDs) and a unique number.            </p>
            <p>
              3. Cookies are used for the following purposes:
            <p><BsDot/>adapting the content of the Website to the User’s preferences and optimizing the use of the Website. In particular, these files allow to recognize the User’s device and properly display the Website, adapting it to his needs and preferences;</p>
            <p><BsDot/>creating statistics and analyses regarding the use of the Website;
            <p><BsDot/>using the IT tools referred to in §4.</p>
            </p>

            </p>

            <p>
              4. As part of the Website, two basic types of cookies are used: “session” (session cookies, session storage) and “permanent” (persistent cookies, local storage). Session cookies are temporary files that are stored on the User’s device until the session expires (e.g., leaving the Website, deleting them by the User, or turning the software off). Persistent cookies are stored in the User’s device for the time specified in the cookie file parameters or until they are deleted by the User.
            </p>
            <p>5. The use of cookies does not cause any configuration changes on the end user’s device and the software installed on this device.</p>
            <p>6. The default settings of web browsers usually allow the saving of cookies on end user’s devices. These settings can be changed by Users.</p>
            <p>7.User can determine the conditions for the use of cookies by means of the software settings (web browser) installed on his end device. The change may consist in partial or complete limitation of the option of saving cookies files on the user’s end device.</p>
            <p>8. Controller informs that pursuant to the provisions of the Telecommunications Law Act, the end user’s consent to storage of information or access to information already stored in the user’s telecommunications end device, may also be expressed by the user through the software settings installed in the end device used by him. Therefore, if the user did not want to express such consent, he shall change the settings of the web browser.</p>
            <p>9. Detailed information on changing browser settings regarding cookies and their removal can be obtained on the official website of a specific browser. In particular, the above information can be found at the following website addresses:

             <p className='ms-2 text-white'><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" style={{color:"#00eac7"}}>
                    <BsDot/> Firefox browser</a>  </p>

                    <p className='ms-2 text-white'><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en-GB" style={{color:"#00eac7"}}>
                    <BsDot/> Chrome browser</a>  </p>


                    <p className='ms-2 text-white'><a href='https://support.microsoft.com/en-au/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd'style={{color:"#00eac7"}}>
                    <BsDot/>Microsoft Edge browser</a></p>


                    <p className='ms-2 text-white'><a href='Opera browser' style={{color:"#00eac7"}}>
                    <BsDot/>Opera browser</a></p>


                    <p className='ms-2 text-white'><a href='https://support.apple.com/en-gb/guide/safari/sfri11471/mac'style={{color:"#00eac7"}}>
                    <BsDot/>Safari browser</a></p>

            </p>
            
            </div>
            </div>
            </div>
            </div>





  {/* >>>>>>>>>>IT TOOLS>>>>>>>>>>>>s */}
  <div className="row">

<div className="col-md-6">
   <div className='privacy_right_data '>
   <span><strong className='ms-2 text-white' style={{fontFamily:"Courier New",textAlign:'center'}}>§4.</strong></span>
   <span>IT Tools</span>
<div className='privacy_para'>

<p>1.Controller uses the Google Analytics tools provided by Google LLC, that has its headquarters in the USA, therefore outside of the European Economic Area. Google LLC. is an entity that has joined the EU-US Privacy Shield program and ensures an adequate level of data protection. This tool is used to analyze website statistics.
</p>

<p>
2.Controller uses the Facebook Pixel tool, which is an analytical tool that helps to measure the effectiveness of advertisements based on the analysis of actions taken by end users on the website, which in turn allows for conducting more effective advertising campaigns.</p>
<p>
Controller may use the Hotjar tool on the Website, the purpose of which is to analyze the behavior of the end user while using the Website. Hotjar records the way the end user navigates the Website (including, for example, navigation or cursor movement). However, Controller does not obtain any other end user data with this tool. This tool is used by Controller only to analyze and optimize the functioning of the Website. More information about Hotjar’s privacy policy can be found at <a href='https://www.hotjar.com.'style={{color:"#00eac7"}}>https://www.hotjar.com.</a>s There is also the option of excluding the end user from analyzing his behavior on the Website. More information on this subject can be found at <a href='https://www.hotjar.com/legal/compliance/opt-out.' style={{color:"#00eac7"}}>https://www.hotjar.com/legal/compliance/opt-out.</a></p>


</div>
      
   
   </div>
</div>

</div>
   </section>




       <footer className='footer_content'>
        <Footer/>
       </footer>
       </>
  )
    }
    export default Privacy
