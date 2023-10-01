import './App.scss'
import Nav from './components/navigation/Nav';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/login/Login';


function App() {
  return (
    <Router>
      <div className='app-container'>
        {/* <Nav /> */}
        
        <Switch>
        <Route path="/" exact>
            Home
          </Route>
          <Route path="/news">
            News
          </Route>
          <Route path="/about">

          </Route>
          <Route path="/contact">

          </Route>
          
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            404 NOT FOUND
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
