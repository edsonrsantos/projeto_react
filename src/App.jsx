import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./Home"
import Contatos from './Contatos'
import Produtos from './Produtos'
import Sobre from './Sobre'
import Header from './Header'
import Footer from './Footer'

function App() {
  
  return (
     <div className='layout'>
      <BrowserRouter>
      <Header />
        <main className='content'>
          
         <Routes>
          
          <Route path="/" element={<Home />}/> 
          <Route path="/contatos" element={<Contatos />}/>
          <Route path="/produtos" element={<Produtos />}/>
          <Route path="/sobre" element={<Sobre/>}/> 
          
        </Routes>
      </main>
      <Footer />
      </BrowserRouter>
      </div>
  )
}

export default App
