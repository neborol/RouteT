import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import MyProfile from './components/profile/MyProfile';
import ProjectDashboard from './components/dashboard/ProjectDashboard';
import MyDashboard from './components/dashboard/MyDashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Approved from './components/approved/Approved';
import Pool from './components/pool/Pool';
import PrivateRoute from './components/utilities/PrivateRoute';
// import setUser from './components/utilities/setUser';
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
            <Route exact path='/approved' component={Approved} /> 
            <Route exact path='/ideas-pool' component={Pool} /> 
            <PrivateRoute exact path='/project-dashboard' component={ProjectDashboard} /> 
            <PrivateRoute exact path='/profile' component={MyProfile} />
            <PrivateRoute exact path='/dashboard' component={MyDashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} /> 
          </Switch>
        </section>
        
    </Router>
  );
}

export default App;
