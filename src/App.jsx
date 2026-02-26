import AuthWrapper from './components/AuthWrapper.jsx'
import Display from './components/Display.jsx'
import {Toaster} from 'react-hot-toast'
import './App.css'
function App() {
  

  return (
    <AuthWrapper>
      <Toaster/>
      <Display/>
    </AuthWrapper>
  )
}

export default App
