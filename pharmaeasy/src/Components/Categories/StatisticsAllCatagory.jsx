import React from 'react'
import "../styles/StatisticsAllCatagory.css"
const StatisticsAllCatagory = () => {
  return (
    <div>
        <div className="StatisticsWrapper">
        <div className="statisticsDiv">
            <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FgenuineMedicine.svg&w=64&q=75" alt=""/>
            <h3>1 Lakh+ Products</h3>
            <p>We maintain strict quality controls on all our partner retailers, so that you always get standard quality
                products.</p>
        </div>
        <div className="statisticsDiv">
            <img src=" https://pharmeasy.in/_next/image?url=%2Ficons%2FsecurePayment.svg&w=64&q=75" alt=""/>
            <h3>Secure Payment</h3>
            <p>100% secure and trusted payment protection</p>
        </div>
        <div className="statisticsDiv">
            <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FeasyReturn.svg&w=64&q=75" alt=""/>
            <h3>Easy Return</h3>
            <p>We have a new and dynamic return window policy for medicines and healthcare items. Refer FAQs section for
                more details.</p>
        </div>
    </div>
    <div className="downloadAppDiv">
        <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FfooterMobile.jpg&w=640&q=75" alt=""/>
        <div className="downloadAppDesc">
            <h2>Download the App for Free</h2>
            <div className="downloadLinks">
               <div>
                    <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FplayStore.png&w=64&q=75" alt="play"/>
                    <p>Google Play</p>
               </div>
               <div>
                    <img src="https://pharmeasy.in/_next/image?url=%2Ficons%2FappStore.png&w=64&q=75" alt="app"/>
                    <p>App Store</p>
               </div>
               
            </div>
        </div>
    </div>
    </div>
  )
}

export default StatisticsAllCatagory