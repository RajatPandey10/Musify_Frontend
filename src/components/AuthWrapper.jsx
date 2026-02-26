import {useAuth} from '../context/AuthContext.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import {useState} from 'react';

const AuthWrapper = ({children})=>{
    const {isAuthenticated} = useAuth();

    const [showRegister,setShowRegister] = useState(false);

    if(!isAuthenticated()){
        return showRegister ?(
            <Register/>
        ):(
            <Login/>
        );
    }

    return children;
}

export default AuthWrapper;