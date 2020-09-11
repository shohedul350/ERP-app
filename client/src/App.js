import React, {Fragment } from 'react';
import {BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'

import Login from './Page/signin'
import ProctedRoute from './utils/proctedRoute'
import ComingSoon from './Page/comingSoon'
import ForgetPassword from './Page/forgotPassword'
import ResetPassword from './Page/resetPassword'
import Dashboard  from './components/layout/Dashboardlayout';

import './App.css';
import AuthState from './context/authContext/AuthState'
import setAuthToken from './utils/setToken'


function App() {


  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
           <AuthState>
            <BrowserRouter>
              <Fragment>
                <div className='App'>
                  <Switch>
                 
                    <Route exact path = '/' component={Login}/>
                    <ProctedRoute exact path = '/:dashboard' component={Dashboard}/>
                    <ProctedRoute exact path='/dashboard/:comp' component={Dashboard} />
                    <Route exact  path="/forget-password" component={ForgetPassword}/>
                    <Route exact path="/reset/:token" component={ResetPassword}/>
                   <Route exact path="/Terms&Conditions" component={ComingSoon}/>
                  </Switch>
                </div>
              </Fragment>
            </BrowserRouter>
            </AuthState>
  );
}

export default App;