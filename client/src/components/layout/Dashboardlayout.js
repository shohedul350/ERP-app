import React, {useState,useContext,useEffect} from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

import { Layout, Menu ,Avatar,Popover} from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
   
} from '@ant-design/icons';
import DashboardRouter from '../../DashboardRouter'


import './DashboardLayout.css';
import AdminContext from '../../context/authContext/authContext'
import ProfileContext from '../../context/profileContext/ProfileContext'
import ProductContext from '../../context/productContext/productContext'

export default function SidebarExample(props) {
  const { url } = props.match;
  const {getAuth,logout}=useContext(AdminContext);
  const {getProfile,profile}=useContext(ProfileContext);
  const {getProduct}=useContext(ProductContext)
  useEffect(()=>{
    getAuth();
    getProfile();
    getProduct()
    // eslint-disable-next-line
  },[])

 
  const content = (
    <div>
      <p onClick={()=>logout()} style={{cursor:"pointer"}}>Logout</p>
      <Link to="/dashboard/my-profile"><p style={{cursor:"pointer"}}>My Profile</p></Link>
    </div>
  );
  
 const companyProfile = profile[0] || []
  
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
          <div className="logo ">
            
          <Avatar src="https://i.pinimg.com/originals/1d/cd/6f/1dcd6fb810c39afffab77967d67741c9.jpg" size={30}  />
          <p className="ml-5" style={{fontSize:"12px"}}>{companyProfile.companyName}</p>
          </div>
        
        
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
          
          {/* user menu item */}
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

          {/* product menu */}
          <SubMenu key="sub4" icon={<AppstoreOutlined />} title="PRODUCT">
            <Menu.Item key="13">
            <Link  to="/dashboard/all-product">
                   STOCK
                  </Link>
            </Menu.Item>
            <Menu.Item key="14">
            <Link  to="/dashboard/add-product">
                   ADD PRODUCT
                  </Link>
            </Menu.Item>


          </SubMenu>

             {/* customer menu */}
             <SubMenu key="sub5" icon={<AppstoreOutlined />} title="CUSTOMER">
            <Menu.Item key="14">
            <Link  to="/dashboard/add-customer">
                   ADD CUSTOMER
                  </Link>
            </Menu.Item>
            <Menu.Item key="15">
            <Link  to="/dashboard/get-customers">
                   GET CUSTOMERS
                  </Link>
            </Menu.Item>


          </SubMenu>

              {/* invoice menu */}
              <SubMenu key="sub6" icon={<AppstoreOutlined />} title="INVOICE">
            <Menu.Item key="15">
            <Link  to="/dashboard/create-invoice">
                 CREATE INVOICE
                  </Link>
            </Menu.Item>
         


          </SubMenu>

          {/* companyProfile menu item */}

          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="COMPANY PROFILE">
            <Menu.Item key="12">
            <Link  to="/dashboard/get-profile">
                   PROFILE
                  </Link>
            </Menu.Item>

            <Menu.Item key="13">
            <Link to={'/dashboard/create-profile'}>
                  CREATE PROFILE
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


            <div className="float-right mr-4">
             <Popover placement="leftTop" content={content} trigger="click">
        
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpcLzYU8SsybUPTpqpI01wbVK1Ysqi5FU98w&usqp=CAU" size={30}  />
           
            </Popover>
            </div>
          </Header>

          <Content
            className="site-layout-"
            style={{
              flexShrink: '0',
            }}>
           
           <div className="site-layout-backg bg-dark text-white  " style={{ margin:0, minHeight: "100%" }}>
          
             <DashboardRouter url={url} />
        </div>

          </Content>
          <Footer
                      style={{
                        background: 'dark',
                        textAlign: 'center',
                        
                      }}>
                     Ant Design ©2020 Develop By Shohedul
                    </Footer>
    
    

        </Layout>
      </Layout>
      </Router>
  );
}
