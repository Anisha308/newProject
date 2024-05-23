import React from 'react'
import Header from '../Headers/Header'
import Footer from '../Footer/footer'
import UserRouter from '../../Routers/userRouter.jsx'
function layout() {
  return (
    <div>
      <Header />
     
       <UserRouter/>
     
           <Footer/>
    </div>
  )
}

export default layout
