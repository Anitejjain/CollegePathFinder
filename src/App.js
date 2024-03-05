import React from 'react';
import './index.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Missing from './Components/Missing/Missing';
import Nav from './Components/Nav/Nav';
import Predictor from './Components/CollegePredictor/CollegePredictor';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <React.Fragment>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<Profile />} exact />
  
          <Route path="/CollegePredictor" element={<Predictor />} exact />

          {/* <Route path="/edit/:id" element={<EditPost />} exact />

          <Route path="/post/:id" element={<PostPage />} ></Route>

          <Route path="/about" element={<About />} /> */}

          <Route path="*" element={<Missing />} />
        </ React.Fragment>
          
      </Routes>
    </div>
  );
}

export default App;
