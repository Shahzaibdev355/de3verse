
import './App.css';
import './components/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Faq from './components/Faq';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';

function App() {
  return (
    <>

<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/privacy' element={<Privacy/>}></Route>
      <Route path='/faq' element={<Faq/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/contactus" element={<Contact/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route></Route>
    </Routes>
</BrowserRouter>
    
    </>
  );
}

export default App;
