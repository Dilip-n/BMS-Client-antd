import React from "react"
import {Form, Button, Input, message} from "antd";
import { Link } from "react-router-dom";
import {RegisterUser} from "../../api/users"

function Register(){
    const onFinish = async (values) => {
        try {

            const response = await RegisterUser(values);


            if (response.success) {
                message.success(response.message);
                localStorage.setItem("token", response.data)
            }
            else {

                message.error(response.message)
            }
        } catch (error) {

            message.error(error.message)
        }
    }

    return (
        <>
        <main className="App-header">
            <h1>Register to Book My Show</h1>
            <section className="mw-500 text-center px-3">
                <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                        label="Name"
                        htmlFor="name"
                         name="userName"
                        className="d-block"
                        rules={[
                            { required: true, message: " Name is required" },
                           
                        ]}
                    >
                        <Input id="name"
                            type="text"
                            placeholder="Enter Your Name"  ></Input>
                    </Form.Item>
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
                        label={<span className="custom-label">Password</span>}
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
                        className="half-width"
                            type="primary"
                            htmlType="submit"
                            block
                            style={{ fontSize: "1.5rem", fontWeight: "600" }}
                        >SignIn</Button>
                    </Form.Item>

                </Form>
                <div>
                        <p>
                            Already a user ? <Link to="/login">login</Link>
                        </p>
                    </div>
            </section>
        </main>
    </>
    )
}

export default Register