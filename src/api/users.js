import { axiosInstance } from ".";

// Register new user

export const RegisterUser = async (value) => {
    try {
        const payload = {
            name: value.userName,
            email: value.email,
            password: value.password
        }
        console.log(payload)
        const response = await axiosInstance.post("api/user/register", payload)
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (value) => {
    try {
        const payload = {
            email: value.email,
            password: value.password
        }
        console.log(payload)

        const response = await axiosInstance.post("/api/user/login", payload)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const GetCurrentUser = async () => {

    try {
        const response = await axiosInstance.get("/api/user/currentUser")
        console.log(response);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const LogoutUser = async() =>{
    try {
        const response = await axiosInstance.post("/api/user/logout")
        console.log(response);
       
        return response.data;
    } catch (error) {
        console.log(error)
    }
}