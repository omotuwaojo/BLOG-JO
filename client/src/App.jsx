import React from 'react'
import { BrowserRouter,Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>

          <Route path="/" element={<Dashboard />}>

          </Route>
          <Route path="/signup" element={<Signup />}>

          </Route>
          <Route path="/signin" element={<Signin />}></Route>
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
