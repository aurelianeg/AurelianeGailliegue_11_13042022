import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import GlobalStyle from '../utils/style/GlobalStyle'
import Header from './Header/Header'
import Home from '../pages/Home/Home'
import Location from '../pages/Location/Location'
import About from '../pages/About/About'
import Error from '../pages/Error/Error'
import Footer from './Footer/Footer'

function App() {
   return (
      <div className="app_container">
         <Router>
            <GlobalStyle />
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/location=:id" element={<Location />} />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   )
}

export default App
