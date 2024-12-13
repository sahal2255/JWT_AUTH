
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import UserRoute from './routes/UserRoute'
function App() {

  return (
    <>
    <BrowserRouter>
      <UserRoute />
    </BrowserRouter>
   
    </>
  )
}

export default App
