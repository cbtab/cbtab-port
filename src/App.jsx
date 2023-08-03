import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Main/NavBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
        <Header/>
        <NavBar/>
        <Main/>
        <Footer/>
    </Router>
  )
}

export default App
