import React from 'react';
import { Switch } from 'react-router-dom';
import Widget from './components/Widgets/index'
import AdminAccessRoute from './utils/adminAccessRoute'
import ProctedRoute from './utils/proctedRoute'
import Alluser from './components/user/allUser'
import AddAuth from './components/user/addAuth'
import MyProfile from './components/user/myProfile'
import Permission from './components/user/permission'
import CreateProfile from './components/companyProfile/CreateProfile'
import GetProfile from './components/companyProfile/GetProfile'
import ChangePassword from './components/user/changePassword'
import AllProduct from './components/product/GetProduct'
import AddProduct from './components/product/addNew/Product'
import EditProduct from './components/product/addNew/EditProduct'
import AddCustomer from './components/customer/addcustomer'
import GetCustomers from './components/customer/getCustomers'
import CustomerDetails from './components/customer/customerdetails'
import Invoice from './components/invoice/Cart'
import InvoicePrint from './components/invoice/invoicePrint'
class DashboardRouter extends React.Component {
  render() {
  
    return (
      <Switch>
        <ProctedRoute
          exact
          path="/dashboard"
          component={Widget}
        />

         <AdminAccessRoute
          exact
          path="/dashboard/all-auth"
          component={Alluser}
        />
          <ProctedRoute
          exact
          path="/dashboard/add-auth"
          component={AddAuth}
        />
          <ProctedRoute
          exact
          path="/dashboard/my-profile"
          component={MyProfile}
        />

         <ProctedRoute
          exact
          path="/dashboard/all-product"
          component={AllProduct}
        />
         <ProctedRoute
          exact
          path="/dashboard/add-product"
          component={AddProduct}
        />
          <ProctedRoute
          exact
          path="/dashboard/edit-product"
          component={EditProduct}
        />

        <ProctedRoute
          exact
          path="/dashboard/add-customer"
          component={AddCustomer}
        />
        <ProctedRoute
          exact
          path="/dashboard/get-customers"
          component={GetCustomers}
        />
        <ProctedRoute
          exact
          path="/dashboard/:customer-details/:orderNumber"
          component={CustomerDetails}
        />
          <AdminAccessRoute
          exact
          path="/dashboard/create-profile"
          component={CreateProfile}
        />
         <AdminAccessRoute
          exact
          path="/dashboard/create-invoice"
          component={Invoice}
        />
          <ProctedRoute
          exact
          path="/dashboard/invoice-print/:id"
          component={InvoicePrint}
        />
          <ProctedRoute
          exact
          path="/dashboard/get-profile"
          component={GetProfile}
        />
        <ProctedRoute
          exact
          path="/dashboard/permission"
          component={Permission}
        />
        <ProctedRoute
          exact
          path="/dashboard/change-password"
          component={ChangePassword}
        />
      </Switch>
    );
  }
}
export default DashboardRouter;