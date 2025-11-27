import './App.css';

// 1- cconfig react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'

// components 
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import About from './pages/About'
import Product from './components/Product';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <h1>React Router!</h1>
      <BrowserRouter>
      {/* 2 - links com react router*/}
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
      {/* 4 - Rota dinamica*/}
        <Route path = "/products/:id" element={<Product />} />
      {/* 6 - nested route*/}
        <Route path = "/products/:id/info" element={<Info />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
