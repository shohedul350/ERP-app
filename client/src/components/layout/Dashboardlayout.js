import React, {useState,useContext,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
   
} from '@ant-design/icons';
import DashboardRouter from '../../DashboardRouter'


import './DashboardLayout.css';
import AdminContext from '../../context/authContext/authContext'


export default function SidebarExample(props) {
  const { url } = props.match;
  const {getAuth,getAllAuth,isReload,logout}=useContext(AdminContext)
  useEffect(()=>{
    // getAuth();
    // getAllAuth()
  },[])
 
  
    const { Header, Sider, Content, Footer } = Layout;
    const { SubMenu } = Menu;
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const toggle = () => {
        setSidebarToggle(!sidebarToggle)
    }

 

    
  return (
    

        <Router>
        <Layout>
        <Sider trigger={null} collapsible collapsed={sidebarToggle}
        style={{
          overflow: 'auto',
          height: '100vh',
          left: 0,
        }}>
          <div className="logo" />
        
          <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
           
            <Link  to={'/dashboard/'}>
            Dashboard
                  </Link>
          </Menu.Item>
        
      

          
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="USER">
            <Menu.Item key="9">
            <Link  to="/dashboard/all-auth">
                    ALL USER
                  </Link>
            </Menu.Item>

            <Menu.Item key="10">
            <Link to={'/dashboard/add-auth'}>
                  ADD USER
                  </Link>
            </Menu.Item>

            <Menu.Item key="11">
            <Link  to={'/dashboard/my-profile'}>
                    MY PROFILE
                  </Link>
           </Menu.Item>

          </SubMenu>
        </Menu>
        </Sider>
        <Layout className="site-layout">
         <Header className="" style={{ padding: 0,height:"68px" }}>
            {React.createElement(sidebarToggle ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}



            <span onClick={()=>logout()} className="float-right mr-4">
            <i class="far fa-user ml-1"></i>
            </span>
           
          </Header>

          <Content
            className="site-layout-"
            style={{
              flexShrink: '0',
            }}>
           
           <div className="site-layout-backg bg-dark text-white  " style={{ margin:0, minHeight: "100%" }}>
             {/* {!url ?  <DashboardRouter url="/dashboard"/>: <DashboardRouter url={url} /> } */}
             <DashboardRouter url={url} />
        </div>

          </Content>
          <Footer
                      style={{
                        background: 'dark',
                        textAlign: 'center',
                        // borderTop: '1px solid #ededed',
                      }}>
                     Ant Design ©2020 Develop By Shohedul
                    </Footer>
    
    

        </Layout>
      </Layout>
      </Router>
  );
}
