import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import MyProfile from './components/profile/MyProfile';
import ProjectDashboard from './components/dashboard/ProjectDashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Approved from './components/approved/Approved';
import Pool from './components/pool/Pool';
import './App.scss';


function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Route exact path='/' component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={MyProfile} />
            <Route exact path='/project-dashboard' component={ProjectDashboard} /> 
            <Route exact path='/create-profile' component={CreateProfile} />
            <Route exact path='/edit-profile' component={EditProfile} /> 
            <Route exact path='/approved' component={Approved} /> 
            <Route exact path='/ideas-pool' component={Pool} /> 
          </Switch>
        </section>
        
    </Router>
  );
}

export default App;
