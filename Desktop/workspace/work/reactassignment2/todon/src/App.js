import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mypost from './components/mypost';
import RegistrationForm from './components/register';
import AddPost from './components/addpost';
import LoginForm from './components/login';
import UpdatePost from './components/updatepost';
import Navigation from './components/navbar';

const App = () => {
  const showNavigation = !['/login'].includes(window.location.pathname);

  return (
    <Router>
      {showNavigation && <Navigation />}
      <Routes>
        <Route exact path="/" element={<Mypost />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/addpost" element={<AddPost />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/update" element={<UpdatePost />} />
      </Routes>
    </Router>
  );
};

export default App;