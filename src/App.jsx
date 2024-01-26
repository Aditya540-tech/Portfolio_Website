import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Contact from './component/Contact'
import Resume from './component/Resume';


function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/resume' element={<Resume/>}/>
     </Routes>
    </Router>
  )
}

export default App
