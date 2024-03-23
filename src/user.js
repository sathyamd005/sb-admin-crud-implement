import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    setUsers(
   [   
    {
    id:1,
    username:"person1",
    email:"person1@gmail.com",
    country:"India",
    state:"tamil nadu",
    city:"madurai",
    phone:"1200390909",
    dob:"01-03-2021",
    gender:"male"
   },
   {
    id:2,
    username:"person2",
    email:"person2@gmail.com",
    country:"India",
    state:"tamil nadu",
    city:"chennai",
    phone:"1200323009",
    dob:"01-04-2025",
    gender:"female"
   }
   ,
   {
    id:3,
    username:"person3",
    email:"person3@gmail.com",
    country:"India",
    state:"kerala",
    city:"chennai",
    phone:"1200342509",
    dob:"01-04-2045",
    gender:"male"
   }

]
    )
  },[])
  return (
    <div class="container-fluid">
      <div
        class="d-sm-flex align-items-center justify-content-between mb-4"
      >
        <h1 class="h3 mb-0 text-gray-800">USERS</h1>
        <Link to={"/Create_User"}

          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
      </div>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                <th>ID</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city</th>
                  <th>phone</th>
                  <th>dob</th>
                  <th>gender</th>
                  <th>action</th>
                  <th>action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>email</th>
                  <th>country</th>
                  <th>state</th>
                  <th>city</th>
                  <th>phone</th>
                  <th>dob</th>
                  <th>gender</th>
                  <th>action</th>
                  <th>action</th>
                  
                </tr>
              </tfoot>
              <tbody>
                {
                  users.map((user)=>{
                    return  <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                  <td><Link to={`/user/${user.id}`} class="btn btn-warning">profile</Link></td> 
                  <td><Link to={`/Edituser/${user.id}`} class="btn bg-dark text-white">Edituser</Link></td> 
                  </tr>
                  })
                }
               

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default User