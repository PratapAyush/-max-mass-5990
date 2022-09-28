import React from 'react'

const ErrorComponents = () => {
  return (
    <div style={{ justifyContent: 'center', backgroundColor: '#f0fdf5', height: '40rem' ,overflow: 'hidden' , alignItems: 'center'}} >
      <h1 style={{fontSize: '36px', fontweight:"900", paddingTop:"30px "}}>Page not found</h1>
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0fdf5', height: '35rem' ,overflow: 'hidden' , alignItems: 'center'}}>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_Sk8Eaq.json"  background="transparent"  speed="1"  style={{width: "100%", height: "450px"}}  loop autoplay></lottie-player>
    </div>
    </div>
  )
}

export default ErrorComponents

// https://cdn.dribbble.com/users/1322726/screenshots/5695684/media/a01e5969a7eca6426880f81d8b15e0e8.gif