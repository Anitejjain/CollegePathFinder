import { useState ,useEffect} from 'react';
import Signup from './Components/Signup/Signup';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import CollegePredictor from './Components/CollegePredictor/CollegePredictor';
import ProfileCollegeGoing from './Components/Profile/Profile_college_going';
import ProfileCollegeSearching from './Components/Profile/Profile';
import Search from './Components/Search/search';
import CollegeCompare from './Components/CollegeCompare/compare';

function App() {

  useEffect(() => { 
    if (!localStorage.getItem('userType')) {
        window.location.href = '/login';
    }
  }, []);
  const userType = localStorage.getItem('userType');
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/collegepredictor' element={<CollegePredictor />}></Route>
        {userType === 'college-going' && <Route path="/profile" element={<ProfileCollegeGoing />} />}
        {userType === 'college-searching' && <Route path="/profile" element={<ProfileCollegeSearching />} />}
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/compare' element={<CollegeCompare/>}></Route>
        <Route path='/logout' element={<CollegeCompare/>}></Route>
        <Route path='/adminLogin' element={<adminLogin />}></Route>
      </Routes>   
    </BrowserRouter>
  )
}

export default App;
