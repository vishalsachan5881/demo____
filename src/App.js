import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/nav'
import Footer from './components/Footer';
import BasicExample from './components/card';
import Overview from './Pages/Overview/Overview/Overview';
import PressRelease from './Pages/Overview/PressRelease/pressRelease';
function App() {
  return (
    <div className='app'>
      
        <BrowserRouter>
        <div className='zenith-header'>
          <header>
            <div className='zenith-home-Heading'>Zenith</div>
            <div className='zenith-header-subtitle'>Data and Analytics Platform</div>
            <Nav />
          </header>

        </div>
          <Routes>
            <Route path='/' element={<div><h1>This will be ur Home page</h1></div>}></Route>
            <Route path='/OverView' element={<Overview />}></Route>
            <Route path='/PressRelease' element={<PressRelease />}></Route>
            <Route path='/Customer' element={<h1>ye hai customer page</h1>}></Route>
            <Route path='/Utility' element={<BasicExample />}></Route>
          </Routes>
        </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App;
