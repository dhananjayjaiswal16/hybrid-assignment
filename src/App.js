import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Notfound from './pages/NotFound'
import NewsState from './context/news/NewsState';
import SingleNews from './components/news/SingleNews';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';
const App = () => {
  return (
    <NewsState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar title="Hybrid Project" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/news/:objectId"><SingleNews /></Route>
                <Route component={Notfound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </NewsState>
  );
}

export default App;
