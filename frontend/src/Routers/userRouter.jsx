import React from 'react'
import LoginScreen from '../Pages/users/LoginScreen'
import { Route, Routes } from 'react-router-dom'

function UserRouter() {
  return (
    <>
          <Routes>
              <Route path="/login" element={<LoginScreen/>}/>
          </Routes>
    </>
  )
}

export default UserRouter
