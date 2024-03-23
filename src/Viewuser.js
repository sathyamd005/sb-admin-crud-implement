import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Viewuser() {
    const params=useParams();
    console.log(params)
  return (
    <div className='container'>
         <div className='row'>
            
            <div
        class="d-sm-flex align-items-center justify-content-between mb-4"
      >
        <h1 class="h3 mb-0 text-gray-800">PROFILE</h1>
        <Link to={`/Editprofile/${params.id}`}

          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        ><i class="fas fa-download fa-sm text-white-50"></i>Edit Profile</Link>
      </div>
         <div className='col-lg-6'>
            username:person1
         </div>
         <div className='col-lg-6'>
            email:person1
         </div>
         <div className='col-lg-6'>
            country:person1
         </div><div className='col-lg-6'>
            state:person1
         </div>  
         <div className='col-lg-6'>
            city:person1
         </div>
         <div className='col-lg-6'>
            gender:person1
         </div>

         </div>
    </div>
   
    
  )
}

export default Viewuser;