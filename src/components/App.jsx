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
   useEffect(() => {
      document.documentElement.style.height = '100%'
      document.documentElement.style.minHeight = '100%'
      document.documentElement.style.display = 'flex'
      document.documentElement.style.flexDirection = 'row'
      document.documentElement.style.justifyContent = 'center'
      document.body.style.maxWidth = '1440px'
      document.body.style.width = '100%'
      document.body.style.height = '100vh' // To remove the blank space under footer
      document.body.style.display = 'flex'
      document.body.style.flexDirection = 'column'
      document.body.style.justifyContent = 'space-between'
      document.body.style.alignItems = 'stretch'
      document.body.style.margin = '0px'
      document.body.style.paddingLeft = '100px'
      document.body.style.paddingRight = '100px'
   }, [])

   return (
      <div className="app_container">
         <Router>
            <GlobalStyle />
            <Header />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/location" element={<Location />} />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   )
}

export default App
