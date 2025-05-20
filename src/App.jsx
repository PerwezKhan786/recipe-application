import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Recipedetails from './component/Recipedetails';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
  return (
   <div>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/recipe' element={<Recipe />} />
    <Route path='/recipe/:recipeId' element={<Recipedetails />} />
  </Routes>
  {/* <Footer /> */}
  
   </div>
  );
}

export default App;