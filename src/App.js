import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './components/menu';
import Header from './components/header';
import Footer from './components/footer';
import Dashboard from './components/dashboard';
import Tables from './components/tables'
import Control from './components/control';
import Billing from './components/billling';
import NotFound from './components/notFound';
import Notifications from './components/notificatons';

function App() {

  return (

    <div className="App">
      <Menu />
      <div className='wrapContent'>
        <Header />

        <Routes>
          <Route exact path='/adminDashboard' element={<Dashboard />} />
          <Route exact path='adminDashboard/dashboard' element={<Dashboard />} />
          <Route exact path='adminDashboard/tables' element={<Tables />} />
          <Route exact path='adminDashboard/billing' element={<Billing />} />
          <Route exact path='adminDashboard/notifications' element={<Notifications />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
      <Control />
    </div>
  )
}

export default App;
