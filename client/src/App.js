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
import ProfileState from './context/profileContext/profileState'
import ProductState from './context/productContext/productState'
import CustomerState from './context/customerContext/CustomerState'
import InvoiceState from './context/invoiceContext/InvoiceState'
import setAuthToken from './utils/setToken'


function App() {


  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
           <AuthState>
             <ProfileState>
               <ProductState>
                 <CustomerState>
                   <InvoiceState>
            <BrowserRouter>
              <Fragment>
                <div className='App'>
                  <Switch>
                 
                    <Route exact path = '/' component={Login}/>
                    <Route exact  path="/forget-password" component={ForgetPassword}/>
                    <Route exact path="/reset/:token" component={ResetPassword}/>
                   <Route exact path="/Terms&Conditions" component={ComingSoon}/>
                    <ProctedRoute exact path = '/:dashboard' component={Dashboard}/>
                    <ProctedRoute exact path='/dashboard/:comp' component={Dashboard} />
                   
                  </Switch>
                </div>
              </Fragment>
            </BrowserRouter>
            </InvoiceState>
            </CustomerState>
            </ProductState>
            </ProfileState>
            </AuthState>
  );
}

export default App;