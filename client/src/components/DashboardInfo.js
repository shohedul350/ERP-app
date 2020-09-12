import React, { useEffect,useContext} from 'react';
import Widget from './Widgets/index'
import ProfileContext from '../context/profileContext/ProfileContext'



import { Row, Col } from 'antd';

const Dashboard = () => {
const {getProfile,profile} = useContext(ProfileContext);

  useEffect(() => {
    getProfile()
    // eslint-disable-next-line
  },[]);
const companyProfile = profile[0] || []
  return (
 <Widget companyProfile={companyProfile}/>
  )
}

export default Dashboard;