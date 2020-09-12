import React,{ useContext,useEffect} from 'react'
import { Spin,Avatar, Popconfirm, message } from 'antd';
import ProfileContext from '../../context/profileContext/ProfileContext'

export default function GetProfile() {
    const {getProfile,profile,deleteProfile} = useContext(ProfileContext)
  
    const {companyName,companyAddress,companyMobile,companyAuth,companyEmail,companyLogo,_id} = profile[0] || []
    useEffect(()=>{
        getProfile();
    // eslint-disable-next-line
    },[])

    function confirm(e) {
        deleteProfile(_id)
        message.success('Click on Yes');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Click on No');
      }
    return (
    !profile.length? (  <div className="spin"><Spin size="large"/>
        </div>):( 
       <div class="p-5 text-white" style={{display:"block"}}>
             <div className="">
           <div className="float-left"><h3>Your Company Profile</h3></div>      
           <div className="float-right"><span className=""><i className="fas fa-user-edit"></i></span></div>
           </div>
      <div class="row m-5">
   
           <div class="col-xs-12 col-sm-6 col-md-6">
        
               <div class="well well-sm">
                   <div class="row">
                       <div class="col-sm-6 col-md-4">
                       <Avatar src="https://i.pinimg.com/originals/1d/cd/6f/1dcd6fb810c39afffab77967d67741c9.jpg" size="large"  />
                           
                       </div>
                       <div class="col-sm-6 col-md-8">
        <h4>{companyName}</h4>
                <span className="mr-2"> <i class="fas fa-map-marker-alt"></i></span>{companyAddress}
                           <p>
                            <span className="mr-1"> <i class="fas fa-mail-bulk"></i></span>{companyEmail}
                               <br />
                              
                               <span className="mr-2"> <i class="fas fa-mobile-alt"></i></span>{companyMobile}
                               <br />
                               <i class="glyphicon glyphicon-gift"></i>{companyAuth}
                               <br />
                               <Popconfirm
                                    title="Are you sure delete this task?"
                                    onConfirm={confirm}
                                    onCancel={cancel}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                   <button className="btn btn-danger btn-sm mt-3">Delete company profile</button>
                                </Popconfirm>
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
