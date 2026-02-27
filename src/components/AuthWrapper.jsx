import {useAuth} from '../context/AuthContext.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import {useState} from 'react';

const AuthWrapper = ({children})=>{
    const {isAuthenticated,loading} = useAuth();

    const [showRegister,setShowRegister] = useState(false);

    if(loading){
        return (
            <div className='flex items-center justify-center bg-black min-h-screen'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4'>
                        <p className='text-white text-lg'>Loading...</p>

                    </div>

                </div>
            </div>
        )
    }

    if(!isAuthenticated()){
        return showRegister ?(
            <Register onSwitchToLogin ={()=> setShowRegister(false)}/>
        ):(
            <Login onSwitchToRegister= {()=> setShowRegister(true)}/>
        );
    }

    return children;
}

export default AuthWrapper;