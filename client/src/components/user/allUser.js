import React,{useContext,useEffect} from 'react'
import { Popconfirm, message } from 'antd';
import AuthContext from '../../context/authContext/authContext'

export default function Alluser() {
const {getAllAuth,adminAuth,allAuth,deleteAuth, success} = useContext(AuthContext);

useEffect(()=>{
  getAllAuth();
//eslint-disable-next-line
},[]);

function confirm(id) {
  deleteAuth(id);
  if(success){
    message.success('Delete Successfull');
  }

}

function cancel(e) {
  
  message.error('Click on No');
}
    return (
        <div className="p-5" >
            
    <table className="table table-responsive-sm table-dark">
    <thead>
      <tr>
      <th scope="col">Serial</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Possion</th>
      <th scope="col">Action</th>
    
      </tr>
    </thead>
    <tbody>
    {
             !allAuth.length? (
              <div className="container d-flex justify-content-center p-4 ">
              <div className="spinner-border m-auto" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            
              <p className="pl-1">Loading...</p> 
            
            </div>
       
             ) : (
               
              allAuth.map((auth,index)=>(
               
                <tr key={index}>
                <td className="">{index+1}</td>
               <td className="">{auth.userName}</td>
               <td className="">{auth.email}</td>
               <td className="">{auth.role}</td>
               <td className="">
                 {adminAuth? (
                        <Popconfirm
                        title="Are you sure delete this task?"
                        onConfirm={()=>confirm(auth._id)}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                        >
                        <span><i className="fas fa-trash-alt"></i></span>
                        </Popconfirm>
                 ) : (
                      <p>Disable</p>
                 )}
              

               </td>
          </tr>
                )
              )
             )
           }

    </tbody>
  </table>
        </div>
    )
}

