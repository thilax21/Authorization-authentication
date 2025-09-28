import './App.css'
import Signin from './components/singin';
import Signup from './components/signup';
import DetailPage from './components/detail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/details/:name/:email' element={<DetailPage />} />
      </Routes>
    </>
  )
}
export default App;
