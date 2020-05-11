import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Home from './components/pages/Home';
import MySearch from './components/pages/MySearch';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/my search' component={MySearch} />
            <Route exact path='/about' component={About} />
            {/* <Route exact path='/user/:login' component={User} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
