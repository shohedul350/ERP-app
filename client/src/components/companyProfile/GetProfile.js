import React,{ useContext} from 'react'
import { Spin,Avatar, Popconfirm, message } from 'antd';
import ProfileContext from '../../context/profileContext/ProfileContext'
import AuthContext from '../../context/authContext/authContext'
export default function GetProfile() {
    const {profile,deleteProfile} = useContext(ProfileContext)
    const {adminAuth} = useContext(AuthContext)
  
    const {companyName,companyAddress,companyMobile,companyAuth,companyEmail,_id} = profile[0] || []
  

    function confirm() {
        deleteProfile(_id)
        message.success('Click on Yes');
      }
      
      function cancel() {
      
        message.error('Click on No');
      }
    return (
    !profile.length? (  <div className="spin"><Spin size="large"/>
        </div>):( 
       <div className="p-5 text-white" style={{display:"block"}}>
             <div className="">
           <div className="float-left"><h3>Your Company Profile</h3></div>      
           <div className="float-right"><span className=""><i className="fas fa-user-edit"></i></span></div>
           </div>
      <div className="row m-5">
   
           <div className="col-xs-12 col-sm-6 col-md-6">
        
               <div className="well well-sm">
                   <div className="row">
                       <div className="col-sm-6 col-md-4">
                       <Avatar src="https://i.pinimg.com/originals/1d/cd/6f/1dcd6fb810c39afffab77967d67741c9.jpg" size="large"  />
                           
                       </div>
                       <div className="col-sm-6 col-md-8">
        <h4>{companyName}</h4>
                <span className="mr-2"> <i className="fas fa-map-marker-alt"></i></span>{companyAddress}
                           <p>
                            <span className="mr-1"> <i className="fas fa-mail-bulk"></i></span>{companyEmail}
                               <br />
                              
                               <span className="mr-2"> <i className="fas fa-mobile-alt"></i></span>{companyMobile}
                               <br />
                               <i className="glyphicon glyphicon-gift"></i>{companyAuth}
                               <br />

                               {adminAuth? (
                                    <Popconfirm
                                    title="Are you sure delete this task?"
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                    >
                                    <button className="btn btn-danger btn-sm mt-3">Delete company profile</button>
                                    </Popconfirm>
                               ) : (
                                
                               <button className="btn btn-danger btn-sm mt-3" disabled>Delete company profile</button>
                           

                               )}
                             
                        </p>

                       </div>
                   </div>
               </div>
           </div>
       </div>
      
   </div>
   
    ) 
    )
}
