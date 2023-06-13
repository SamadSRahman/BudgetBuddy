import { Button } from './components/buttons/button';
import { Header } from './components/header/header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {LastMonth, LastWeek, DailyExp } from './pages';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import SideBar from './Sections/sideBar/SideBar';
import YourData from './pages/yourData/YourData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideBar/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<DailyExp/>} />
          <Route path='/lastMonth' element={<LastMonth/>} />
          <Route path='/lastWeek' element={<LastWeek/>}/>
          <Route path='/yourdata' element={<YourData/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
