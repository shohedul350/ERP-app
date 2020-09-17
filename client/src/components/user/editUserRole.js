
import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/authContext/authContext'

const EditUserRoleModal = () => {

  const { editForm , updateUserRole,clearEditForm} = useContext(AuthContext);

  const [formData,setFormData] = useState({
    _id: "",
      role:""
});

useEffect(() => {
  setFormData({
    _id: editForm._id,
    role:editForm.role,
  })
}, [editForm])


const {_id,role}=formData

const onSubmit = e =>{
  e.preventDefault();
  updateUserRole(formData)
  clearEditForm()
  }

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}

  return (
    <div>
    
      {/* <span><i data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer' }} className="fas fa-pencil-alt"></i></span> */}
      <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                      <label htmlFor="unit"> User Role: </label>
                      <select name="role" 
                        className="form-control"
                        value={role}
                        onChange={e=> onChange(e)}
                        required>
                      <option>admin</option>
                      <option>user</option>
                      </select>
                    </div>
<div class="modal-footer">
        <input type="submit" className="btn btn-success btn-sm" />
        <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
      </div>
         </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export  default EditUserRoleModal;