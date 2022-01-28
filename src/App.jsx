import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Details from './views/Details'
import Home from './views/Home'
import Elements from './views/Elements'
import injectContext from "./store/appContext";
import Navbar from './components/Navbar'
import './styles/index.css'

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/elements/:type" element={<Elements />}></Route>
        <Route path="/details/:type/:uid" element={<Details />}></Route>
      </Routes>
    </Router>
  )
}

export default injectContext(App);