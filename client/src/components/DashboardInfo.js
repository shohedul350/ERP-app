import React, { useEffect } from 'react';
import Widget from './Widgets/index'



import { Row, Col } from 'antd';

const Dashboard = () => {
  //const authContext = useContext(AuthContext);

  useEffect(() => {
    // Load user method will here
    // console.log('Load user ran')
    // authContext.loadUser();
    // eslint-disable-next-line
  },[]);

  return (
 <Widget/>
  )
}

export default Dashboard;