import AuthWrapper from './components/AuthWrapper.jsx'
import Display from './components/Display.jsx'
import Sidebar from './components/Sidebar.jsx'
import {Toaster} from 'react-hot-toast'
import './App.css'
function App() {
  

  return (
    <>
      <Toaster/>

      <AuthWrapper>

        <div className='h-screen bg-black'>
          <div className='h-[90%] flex'>

            <Sidebar />
            <Display />

          </div>

          {/* Player component */}

        </div>
        
      </AuthWrapper>
    </>
  )
}

export default App
