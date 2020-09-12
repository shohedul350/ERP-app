import React,{useContext} from 'react'
import { Form, Input, Button,message } from 'antd';
import ProfileContext from '../../context/profileContext/ProfileContext'
export default function CreateProfile() {
  const {createProfile,error,serverMessage,success} = useContext(ProfileContext)

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
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} ',
  },
};

    const onFinish = values => {
 
      createProfile(values.companyDetails)   
        // console.log(values);
      };
    
    return (  
    <div className="container p-5 " style={{}}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['companyDetails', 'companyAuth']}
          label="Company Auth"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['companyDetails', 'companyName']}
          label="Company Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['companyDetails', 'companyEmail']}
          label="Company Email"
          rules={[
            { required: true,
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['companyDetails', 'companyMobile']}
          label="Company Number"
          rules={[
            {
                required: true,
              min: 11,
            
            },
          ]}
        >
          <Input />
        </Form.Item>
       
        <Form.Item name={['companyDetails', 'companyAddress']} label="Company Address"
         rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    );

    }

 