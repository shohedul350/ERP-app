import React,{useContext,useEffect} from 'react'
import { Form, Input, Button,message } from 'antd';
import CustomerContext from '../../context/customerContext/CustomerContext'
export default function CreateProfile() {
  const {addCustomer,error,serverMessage,success} = useContext(CustomerContext)

  useEffect(()=>{
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
  },[serverMessage])// error message

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
    range: '${label} must be  ',
  },
};

    const onFinish = values => {
 
        addCustomer(values.customerDetails)
       
        // console.log(values);
      };
    
    return (  
    <div className="container p-5 " style={{}}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['customerDetails', 'orderNumber']}
          label="Order Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
     
        <Form.Item
          name={['customerDetails', 'email']}
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
          name={['customerDetails', 'mobile']}
          label="Customer Number"
          rules={[
            {
                required: true,
              min: 11,
            
            },
          ]}
        >
          <Input />
        </Form.Item>
       
        <Form.Item name={['customerDetails', 'address']} label="Customer Address"
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

 