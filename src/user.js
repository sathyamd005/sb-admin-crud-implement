import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [users,setUsers]=useState([])
  const [isloading,setLoading]=useState(false)
  useEffect(()=>{
     fetchdata()
  },[])
  let fetchdata= async () =>{
    try {
      setLoading(true)
    const users=await axios.get("https://660269239d7276a755532ba5.mockapi.io/users")
      setUsers(users.data)
      setLoading(false)
    } catch (error) {
      console.log("Error")
    }
  }
  let DeleteUser=()=>{
    let result =window.confirm("Are you sure you want to delete?")
    if(result){
      alert("deleted")
    }
  }
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

     {
      isloading? <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div> : <div class="card shadow mb-4">
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
               
                
              </tr>
            </tfoot>
            <tbody>
              {
                users.map((user)=>{
                  return  <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>{user.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob}</td>
                  <td>{user.gender}</td>
                <td><Link to={`/user/${user.id}`} class="btn btn-warning mr-1">view</Link>
                <Link to={`/Edituser/${user.id}`} class="btn btn-primary mr-1">Edit</Link>
                <button onClick={()=>{DeleteUser()}} className='btn btn-danger'>Delete</button></td> 
                </tr>
                })
              }
             

            </tbody>
          </table>
        </div>
      </div>
    </div>

     }
    </div>
  )
}

export default User