import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Tables from './components/tables'
import Control from './components/control';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='wrapContent'>
        <Header />

        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/Dashboard' element={<Dashboard />} />
          <Route exact path='/Tables' element={<Tables />} />
        </Routes>

        <Footer />
      </div>
      <Control />
    </div>
  )
}

export default App;
