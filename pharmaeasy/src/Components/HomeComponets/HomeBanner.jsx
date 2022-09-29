import React from 'react'
import "../styles/HomeBanner.css"
const HomeBanner = () => {
  return (
    <div>
        <div className="BannerWrapper" >
        <div>
            <div >
                <div>Simplifying Healthcare, Impacting Lives</div>
                <h2>Download the App for free</h2>
                <div>
                    <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&amp;hl=en_IN&amp;gl=US&amp;utm_source=web&amp;utm_medium=footer"
                        target="_blank" rel="noopener noreferrer"><img alt="play store"
                            src="https://assets.pharmeasy.in/web-assets/dist/4e4f1cab.png"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.phonegap.rxpal&amp;hl=en_IN&amp;gl=US&amp;utm_source=web&amp;utm_medium=footer"
                        target="_blank" rel="noopener noreferrer">
                        <img alt="play store" src="https://assets.pharmeasy.in/web-assets/dist/83095c03.png"/>
                    </a>
                </div>
            </div>


            <div><img src="https://assets.pharmeasy.in/web-assets/dist/1d1ccea7.jpg" alt=""/></div>
        </div>

    </div>
    </div>
  )
}

export default HomeBanner