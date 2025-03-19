import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/Main'
import { About } from './pages/About'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App