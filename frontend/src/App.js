import {React} from 'react'
import { Board } from './components/board';
import { Top } from './components/top';
import { Main } from './components/main';
import { Editor } from './components/editor';
import { Footer } from './components/footer';
import { ProductView } from './components/productView';
import { SignIn } from './components/signIn';
import { SignUp } from './components/signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return(
    <div>
      <Top/>
      <Routes>
        <Route path='/board' element={<Board/>}/>
        <Route path='/editor' element={<Editor/>}/>
        <Route path='board/product/:id' element={<ProductView/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
