import React,{useContext} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import Layout from '../components/layout/Layout'
// import Login from '../pages/login/Login'
// import AuthorizedRoute from './AuthorizedRoute'
// import NoFound from '../pages/noFound/NoFound'
import AuthContext from '../context/authContext/authContext'
import DashboardInfo from '../components/DashboardInfo'
import AllUser from '../components/user/allUser'
import AddAuth from '../components/user/addAuth'
import MyProfile from '../components/user/myProfile'
import ChangePassword from '../components/user/changePassword'
import Permission from '../components/user/permission'
import ProctedRoute from '../utils/proctedRoute'
import AdminAccessRoute from '../utils/adminAccessRoute'
// const {adminAuth}= useContext(AuthContext)
// export const Router = () => (
// 		<BrowserRouter>
// 			<div>
// 				<Switch>
// 					<Route path="/login" component={Login} />
// 					<Redirect from="/" exact to="/login"/>
// 					<AuthorizedRoute component={Layout} />
// 					<Route component={NoFound}/>
// 				</Switch>
// 			</div>
// 		</BrowserRouter>
// )


// export const routes = [
// 	{
// 		path: '/dashboard/test',
// 		name: 'test',
//         sidebar: () => <div>home1</div>,
// 	},
// 	{
// 		path: '/secend-test',
// 		name: 'secenstest',
//         icon: 'smile',
//         sidebar: () => <div>home2</div>,
	
// 	},
	
// ]
export const routes = [
	{
		path: "/dashboard",
		exact:true,
		sidebar:DashboardInfo,
	   
	  },
	{
	  path: "/dashboard/all-auth",
	  exact:true,
	  sidebar:AllUser,
	 
	},
	{
	  path: "/dashboard/add-auth",
	  exact:true,
	  sidebar: AddAuth
	 
	},
	{ 
		path: "/dashboard/my-profile",
		exact:true,
		sidebar:MyProfile,
	   
	  },
	  {
		path: "/dashboard/change-password",
		exact:true,
		sidebar:ChangePassword,
	   
	  },
	  {
		path: "/dashboard/permision",
		exact:true,
		sidebar:Permission,
	   
	  },
	//   <ProctedRoute
	//   exact
	//   path={'/dashboard/my-profile'}
	//   component={MyProfile}
	// />
  ];