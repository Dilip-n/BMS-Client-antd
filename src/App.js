
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin'
import ProtectedRoute from './components/protectedRoute';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path={"/login"} element={<Login/>} /> 
        <Route path={"/register"} element={<Register/>} />   
        <Route path={"/admin"} element={<Admin/>} />       
      </Routes>
      </BrowserRouter>
    
    </div>
    </Provider>
  );
}

export default App;
