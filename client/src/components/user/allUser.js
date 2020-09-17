import React,{useContext,useEffect} from 'react'
import { Popconfirm, message,Spin ,Button} from 'antd';
import AuthContext from '../../context/authContext/authContext'
import EditUserRoleModal from './editUserRole'
export default function Alluser() {
const {getAllAuth,adminAuth,allAuth,deleteAuth, success,editFormFun} = useContext(AuthContext);

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
        <div className="p-5 card bg-dark">


          {
            !allAuth.length? (
                <div className="spin">
                <Spin size="large"/>
            </div>
       
             ) :(
              <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-responsive-sm  table-dark">
              <thead>
                <tr>
                <th scope="col">Serial</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Edit Role</th>
                <th scope="col">Delete User</th>
              
                </tr>
              </thead>
              <tbody>
              {
                        allAuth.map((auth,index)=>(
                         
                           <tr key={index}>
                           <td className="">{index+1}</td>
                           <td className="">{auth.userName}</td>
                           <td className="">{auth.email}</td>
                           <td className="">{auth.role}</td>
                           <td className="">
                             {adminAuth? (
                              <span onClick={()=>editFormFun(auth)} data-toggle="modal" data-target="#exampleModal"  style={{cursor:"pointer"}}><i class="fas fa-edit"></i></span>
                             ) : (
                          <button type="button" class="btn btn-info btn-sm disabled">Disable</button>
                             ) }
                             
                             </td>
                           <td className="">
                           {adminAuth? (
                                  <Popconfirm
                                  title="Are you sure delete this task?"
                                  onConfirm={()=>confirm(auth._id)}
                                  onCancel={cancel}
                                  okText="Yes"
                                  cancelText="No"
                                  >
                                    <Button type="danger" className="btn-sm">Delete</Button>
                                  </Popconfirm>
                           ) : (
                            <button type="button" class="btn btn-danger btn-sm disabled">Disable</button>
                           )}
                        
          
                         </td>
                    </tr>
                          )
                        )
                       
                     }
          
              </tbody>
            </table>
            <EditUserRoleModal/>
            </div>

             )}

  
        </div>
    )
}

