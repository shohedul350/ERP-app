import React from 'react';
import { Switch } from 'react-router-dom';
import Widget from './components/Widgets/index'
import Alluser from './components/user/allUser'
import AddAuth from './components/user/addAuth'
import MyProfile from './components/user/myProfile'
import Permission from './components/user/permission'
import ChangePassword from './components/user/changePassword'
import AdminAccessRoute from './utils/adminAccessRoute'
import ProctedRoute from './utils/proctedRoute'
class DashboardRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <ProctedRoute
          exact
          path="/dashboard"
          component={Widget}
        />
    
 
         <AdminAccessRoute
          exact
          path={`${url}/all-auth`}
          component={Alluser}
        />
          <AdminAccessRoute
          exact
          path={`${url}/add-auth`}
          component={AddAuth}
        />
          <ProctedRoute
          exact
          path={`${url}/my-profile`}
          component={MyProfile}
        />
        <ProctedRoute
          exact
          path={`${url}/permission`}
          component={Permission}
        />
        <ProctedRoute
          exact
          path={`${url}/change-password`}
          component={ChangePassword}
        />
      
      </Switch>
    );
  }
}

export default DashboardRouter;