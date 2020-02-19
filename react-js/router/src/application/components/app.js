import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


import Home from './pages/home/component'
import Dashboard from './pages/dashboard/component'
import NotFoundPage from './pages/not_found_page/component'

const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
    </Router>
  );
}

export default App;


