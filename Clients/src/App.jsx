
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Main from './View/Main'
import Oneproducts from './compontes/Oneproducts';
import Update from './compontes/Update';

function App() {


  return (
    <>
    <h1>Product Mangements</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/product" element={<Main></Main>} />
        <Route path="/product/:id" element={<Oneproducts></Oneproducts>} />
        <Route element={<Update></Update>} path='/product/edit/:id'/>
    
    </Routes>
    
    </BrowserRouter>
 
      
      
    </>
  )
}

export default App
