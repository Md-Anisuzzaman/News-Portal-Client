import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { asyncCreateUser } from '../../../Features/User/asyncReducers/createUser';



const CreateUser = () => {

  const [previewImage, setpreviewImage] = useState([])
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    dispatch(asyncCreateUser(formData))
    e.currentTarget.reset();
    console.log(e.currentTarget);
  }


  const imageHandler = async (e) => {
    let files = await e.target.files;
    let temp_images = []
    let index = 1;
    for (const file of files) {
      temp_images.push(
        <img className='w-25 me-3' key={index++} src={window.URL.createObjectURL(file)} alt="" />
      )
      setpreviewImage(temp_images)
    }
    setpreviewImage('');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} action="" className='w-75 m-auto' method="POST" >
              <h1 className="text-center mb-4">Create User</h1>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Name <span className="text-danger">*</span></label>
                  <input type="text" name='username' className="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="e.g John Smith" />
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Email Address <span className="text-danger">*</span></label>
                  <input type="text" name='email' className="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="username@address.com" />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Password <span className="text-danger">*</span></label>
                  <input type="password" name='password' className="form-control form-control-lg bg-white bg-opacity-5" />
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Re - Password <span className="text-danger">*</span></label>
                  <input type="password" name='re_password' className="form-control form-control-lg bg-white bg-opacity-5" />
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-lg-6">
                  <label className="form-label">Mobile <span className="text-danger">*</span></label>
                  <input type="text" name='mobile' className="form-control form-control-lg bg-white bg-opacity-5" />
                </div>
                <div className="mb-3 col-lg-6 ">
                  <label className="form-label">Gender : <span className="text-danger">*</span></label>
                  <div className='d-flex p-2 bg-white bg-opacity-5 border border-secondary rounded-3 gap-2'>
                    <label className='me-2'>
                      <input type="radio" value="Male" name="gender" className='me-1' />
                      Male
                    </label>
                    <label me-2>
                      <input type="radio" value="Female" name="gender" className='me-1' />
                      Female
                    </label>
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Address<span className="text-danger">*</span></label>
                <textarea className="form-control form-control-lg bg-white bg-opacity-5" name='address' cols="10" rows="2"></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Image<span className="text-danger">*</span></label>
                <input onChange={imageHandler} type="file" name='image[]' multiple className="form-control form-control-lg bg-white bg-opacity-5" />
                {previewImage}
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CreateUser