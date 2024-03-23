import React from 'react'

function Editprofile() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Username</label>
                <input type={"text"} className='form-control' />
            </div>
        </div>
        <div className='col-lg-6'>
            <div className='form-group'>
                <label>Email</label>
                <input type={"email"} className='form-control' />
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Country</label>
                <select className='form-control'>
                    <option>India</option>
                    <option>Usa</option>
                    <option>China</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>State</label>
                <select className='form-control'>
                    <option>TamilNadu</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                </select>
            </div>
        </div>
        <div className='col-lg-4'>
            <div className='form-group'>
                <label>Country</label>
                <select className='form-control'>
                    <option>Chennai</option>
                    <option>madurai</option>
                    <option>salem</option>
                </select>
            </div>
        </div>
       <div className='col-lg-4'>
        <div className='form-group'>
            <label>Phone</label>
            <input type={"text"} className='form-control'/>
        </div>
       </div>
       <div className='col-lg-4'>
        <div className='form-group'>
            <label>Date of Birth</label>
            <input type={"date"} className='form-control'/>
        </div>
       </div>
       <div className='col-lg-4'>
        <div className='form-group'>
            <label>Gender</label>
            <select className='form-control'>
            <option>male</option>
            <option>female</option>
            </select>
        </div>
       </div>
      <div className='col-lg-4'>
        <div className='form-group'>
            <label>Submit</label>
            <input type={"submit"} className=' form-control btn btn-primary'/>
        </div>
      </div>
    </div>
</div>
  )
}

export default Editprofile