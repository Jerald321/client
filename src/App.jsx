import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Reservation from './components/Reservation'
import RestaurantProfile from './components/RestaurantProfile'
import Search from './components/Search'
import UserReview from './components/UserReview'

import Demo from './components/Demo'
import Logout from "./components/Logout"
import PasswordReset from './components/PasswordReset'
import Register from './components/Register'

import Nav from './Nav'
import Allresturant from "./components/Allresturant"
import Login from './components/Login'


function App() {


  return (
    <>
      <BrowserRouter>
   
      
      <Nav />
      <Search />
     
      {/* <Allresturant /> */}
     
    <Routes>
    <Route path='/Allresturant' element={ <Allresturant />}> </Route>
      <Route path='/Logout' element={<Logout />}> </Route>
      <Route path='/' element={ <Search />}> </Route>

      <Route path='/UserReview' element={ <UserReview />}> </Route>
      <Route path='/Reservation/:id' element={<Reservation /> }> </Route>
      <Route path='/RestaurantProfile' element={<RestaurantProfile />}> </Route>


      <Route path='/Login' element={<Login />}> </Route>
      <Route path='/register' element={<Register />}> </Route>
      {/* <Route path='/userdetails' element={<Userdetails />}> </Route> */}
      <Route path='/PasswordReset' element={<PasswordReset />}> </Route>
    </Routes>


    
    </BrowserRouter> 

    {/* <Allresturant /> */}

    
    </>
  )
}

export default App