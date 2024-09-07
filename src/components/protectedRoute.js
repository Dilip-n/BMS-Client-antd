import React, { useEffect } from'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate , Link} from "react-router-dom";
import {HomeOutlined,LogoutOutlined,ProfileOutlined,UserOutlined} from '@ant-design/icons';
import {message,Layout,Menu} from "antd";
import {LogoutUser} from "../api/users";
import { GetCurrentUser } from '../api/users';
import { SetUser } from '../redux/userSlice';
import {ShowLoading, HideLoading} from "../redux/loaderSlice"




const ProtectedRoute = ({children}) =>{

    const {user} = useSelector((state)=>state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {Header,Footer,Sider} = Layout
    const navItems = [
        {
            label:"Home",
            icon:<HomeOutlined/>
        },
        {
            label:`${user ? user.name : ""}`,
            icon:<UserOutlined/>,
            children:[
                {
                    label : <span onClick={()=>{
                        if(user.role === "admin"){
                            navigate("/admin");                      
                        } else if(user.role === "partner"){
                            navigate("/partner"); 
                        }else {
                            navigate("/profile"); 
                        }
                    }}>My Profile</span>,
                    icon : <ProfileOutlined/>                    
                },
                {
                    label : <Link to="/login" onClick ={async()=>{
                      const result = await LogoutUser()
                      console.log(result)
                      if(result.success){
                        localStorage.removeItem('token');
                        navigate("/login"); 
                      }
                    }}>Logout</Link>,
                    icon : <LogoutOutlined/>
                    
                },

            ]
        }
    ];
    useEffect(() => {
        
      const getValidUser = async()=>{
         try {
            
            dispatch(ShowLoading());
           const response  = await GetCurrentUser();
           console.log(response);
           dispatch(HideLoading());
           dispatch(SetUser(response.data));
            
         } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
             navigate("/login")
         }
       }   
      
       if (localStorage.getItem("token")) {
        getValidUser();
      } else {
        navigate("/login");
      }
      }, []);

    return (
        user && (
            <>
            <Layout>
                <Header className='d-flex justify-content-between ' style= {{
                        position : "sticky",
                        top: 0,
                        zIndex:1,
                        width:"100%",
                        display:"flex",
                        alignItems:"center",

                    }}>
                    
            <h3 className="text-white m-0">Book MY Show</h3>
            <Menu theme='dark' mode='horizontal' items={navItems}></Menu>
                </Header>
                <div style={{padding:24, minHeight:380, background:"#fff"}}>{children}</div>
            </Layout>
            </>
        )
    )
}

export default ProtectedRoute;