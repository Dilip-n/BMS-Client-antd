import React from "react";
import {Form, Button, Input , message} from "antd";
import { Link, useNavigate } from "react-router-dom";
import {loginUser} from "../../api/users"
import Cookies from 'js-cookie';
function Login(){  
    const navigate = useNavigate();

    const onFinish = async (values) =>{   
        try {
            const response = await loginUser(values)
            console.log(response)
            if(response.success){               
                message.success(response.message);
                localStorage.setItem("token", response.data);
                navigate("/")
            }
            else{
                message.error(response.message)
            }
        } catch (error) {
            console.log(error)
        message.error(error.message)
        }
    }; 

        
    
        
    return (    
        <>
            <main className="App-header">
                <h1>Login to Book My Show</h1>
                <section className="mw-500 text-center px-3">
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label="Email"
                            htmlFor="email"
                             name="email"
                            className="d-block"
                            rules={[
                                { required: true, message: " Email is required" },
                                { type: "email", message: "Please enter a valid email" },
                            ]}
                        >
                            <Input id="email"
                                type="text"
                                placeholder="Enter Your email"  ></Input>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            htmlFor="password"
                             name="password"    
                            className="d-block"
                            rules={[
                                { required: true, message: " Passwod is required" },
                            ]}
                        >
                            <Input id="password"
                                type="text"
                                placeholder="Enter Your password"  ></Input>
                        </Form.Item>

                        <Form.Item className="d-block">
                            <Button 
                                type="primary"
                                htmlType="submit"
                                block
                                style={{ fontSize: "1.5rem", fontWeight: "600" }}
                            >Login</Button>
                        </Form.Item>

                    </Form>
                    <div>
                        <p>
                            New User ? <Link to="/register">Register</Link>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login