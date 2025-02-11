

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Cart from './Cart';
import Home from './componets/Home';




function App() {

  return(
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>


</BrowserRouter>
 
  
  );
}

export default App
