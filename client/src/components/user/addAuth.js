import React,{useContext} from 'react'
import {
  Form,
  Input,
  Select,
  Button,
  message
} from 'antd';

import AuthContext from "../../context/authContext/authContext";



 const AddUser = () => {

const {adminAuth,registerAuth,error,serverMessage,success} = useContext(AuthContext);
  // error message
  if(error && serverMessage){
    //show error message
    console.log(serverMessage)
    message.error(serverMessage)
  
  }
  // success aded 
  if(success && serverMessage){
   // show success message
   message.success(serverMessage);
  }
  const [form] = Form.useForm();

  const onFinish = (values) => {

    registerAuth(values);
    form.resetFields();
  };
  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };





    return (
    <div className="p-5" style={{marginRight:"60px"}}>
          <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >

<Form.Item
        name="userName"
        label={
          <span>
            User Name
           
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input user name!',
           
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="role"
        label="Role"
        hasFeedback
        rules={[{ required: true, message: 'Please select role!' }]}
      >
        <Select placeholder="Please select role">
          <Option value="admin">admin</Option>
          <Option value="user">user</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

    

      
        {adminAuth? (
          <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
          Register
        </Button>
        </Form.Item>
        ) : (
          <Form.Item {...tailFormItemLayout}
           help="Only admin can add">
         <Button type="primary" htmlType="submit" disabled>
          disable
        </Button>
        </Form.Item>
        )}
        
    
    </Form>
      </div>
    
    )
}

export default AddUser



// import React,{useState,useContext} from 'react'
// import { message } from 'antd';
// import AuthContext from "../../context/authContext/authContext";



//  const AddUser = (props) => {

// const {registerAuth,error,serverMessage,success} = useContext(AuthContext);



// // error message
// if(error && serverMessage){
//   //show error message
//   console.log(serverMessage)
//   message.error(serverMessage)

// }
// // success aded 
// if(success && serverMessage){
//  // show success message
//  message.success(serverMessage);
// }





    

//     const [formData,setFormData]=useState({
//          userName:"",
//          email:"",
//          role:"",
//          password:"",
//          password2:""
//       });
//  const {userName,email,role,password,password2}=formData

// const onSubmit=e=>{
//   e.preventDefault();
//   if (password !== password2)  {
//     return  message.error("password don't match")
//    }

//   registerAuth({ userName,email,role, password });

// }

// const onChange=e=>{
// setFormData({...formData,[e.target.name]:e.target.value})

// }
//     return (
//     <div className="row p-5 bg-dark text-white ">
//         <div className="col-md-6 offset-md-3">
//           <h4 className="text-center display-6">Register Here</h4>
//                  <form onSubmit={e=>onSubmit(e)}>

//             <div className="form-group">
//               <label htmlFor="name"> Name: </label>
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Enter here"
//                 name="userName"
//                 value={userName}
//                 onChange={e=> onChange(e)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="name"> Email: </label>
//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Enter here"
//                 name="email"
//                 value={email}
//                 onChange={e=> onChange(e)}
//                 required
//               />
        
//             </div>
          
//             <label htmlFor="role"> Role: </label>
//             <div className="input-group ">
       
//             <select className="custom-select "
//              name="role"
//              value={role}
//              required
//              onChange={e=> onChange(e)}
//             >
//                 <option selected>Choose...</option>
//                 <option value="admin">Admin</option>
//                 <option value="user">User</option>

//             </select>
//             <div className="input-group-append">
//                 <label className="input-group-text" for="inputGroupSelect02">Options</label>
//             </div>
//   </div>




// <div className="form-group">
//               <label htmlFor="name"> Password: </label>
//               <input
//                 type="password"
//                 className="form-control mt-2"
//                 placeholder="Enter here"
//                 name="password"
//                 value={password}
//                 onChange={e=> onChange(e)}
//                 required
//               />
        
//             </div>
//             <div className="form-group ">
//   <label>Confirm password</label>
//     <input type="password" 
//     className="form-control m-3 shadow bg-white"
//     placeholder="Enter Here"
//     name="password2"
//     value={password2}
//     onChange={e=> onChange(e)}
//     required
//     />
    
//   </div>

//             <button className="btn btn-primary my-3 d-block">Register</button>
//           </form>
//         </div>
//       </div>
    
//     )
// }

// export default AddUser



