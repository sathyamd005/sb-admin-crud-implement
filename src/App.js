import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./sb-admin-2.css"
import "./fontawesome-free"
import Topbar from './Topbar.js';
import Dashboard from './Dashboard.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './user.js';
import Createuser from './createuser.js';
import Viewuser from './Viewuser.js';
import Edituser from './Edituser.js';
import Editprofile from './Editprofile.js';
function App() {

  return (
  <BrowserRouter>
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar />
    <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/Create_User' element={<Createuser/>}></Route>
        <Route path='/user/:id' element={<Viewuser/>}></Route>
        <Route path='/Edituser/:id' element={<Edituser/>}></Route>
        <Route path='/Editprofile/:id' element={<Editprofile/>}></Route>
      </Routes>
    </div>
    </div>
   </div>
  </BrowserRouter>
  )
}

export default App;
