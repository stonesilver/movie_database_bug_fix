import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';
import Homepage from './pages/homepage/homepage.component';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
