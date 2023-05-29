import React, { useEffect, useState } from 'react'
import './digit.css';
import DigitCountModal from './DigitCountModal';
import axios from 'axios'
import {FaRegEdit} from 'react-icons/fa'
const DigitCount = () => {
  const [BuildScale, setBuildScale] = useState(false);
  const [data, setData] = useState([]);
  const [objectData, setObjectData] = useState({})
  const [updateUi, setUpdateUi] = useState(false);


  const fetchData = async () => {
    try {
      const res = await axios.get("/calculation/get")
      setData(res.data.responseData);
    } catch (error) {
      console.log(error)
    }
  }

  const getData = (data) => {
    setBuildScale(true);
    setObjectData(data)

  }

  const closeModal = () => {
    setBuildScale(false);
  }


  useEffect(() => {
    fetchData();
  }, [updateUi])

  return (
    <div className="container ">
      <section className="digit_wrapper pt-5 pb-5">
        <div className="row">
          
          {
            data.map((curElm)=> <div className="col-md-3" key={curElm._id}>
            <div className="first_digit digit-head text-center">
            <span className='d-block text-end cursor' onClick={()=>getData(curElm)}><FaRegEdit /> </span>

              <h3>{curElm.title} </h3>
              <span className='digit_line'></span>
              <p className='digit_para'>{curElm.paragraph}</p>
            </div>
          </div>)
          }
         
          {/* <div className="col-md-3">
            <div className="second_digit digit-head text-center">
               <h3 className='text-uppercase'>0.0003 Blockovia </h3>
               <span className='digit_line'></span>
               <p className='digit_para'>Avg cost per <br />transaction</p>
            </div>
         </div> */}
          {/* <div className="col-md-3">
           <div className="third_digit digit-head text-center">
           <h3>57234</h3>
               <span className='digit_line'></span>
               <p className='digit_para'>Accounts</p>
           </div>
         </div>
         <div className="col-md-3">
           <div className="fourth_digit digit-head text-center">
           <h3>123</h3>
               <span className='digit_line'></span>
               <p className='digit_para'>Mainnet validators</p>
           </div>
         </div> */}
        </div>
        <DigitCountModal show={BuildScale} hide={closeModal} setUpdateUi={setUpdateUi} objectData={objectData} />
      </section>
    </div>
  )
}

export default DigitCount