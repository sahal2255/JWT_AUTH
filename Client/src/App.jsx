
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import UserRoute from './routes/UserRoute'
import UserLayout from './layouts/UserLayout'
function App() {

  return (
    <>
    <BrowserRouter>
      {/* <UserRoute /> */}
      <UserLayout />
    </BrowserRouter>
   
    </>
  )
}

export default App
