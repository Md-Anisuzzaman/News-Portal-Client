import React from 'react'

const EditUser = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <div className="card">
          <div className="card-body">
            <div class="register-content">
              <form action="" className='w-75 m-auto' method="POST" >
                <h1 class="text-center">Update User</h1>
                <div class="mb-3">
                  <label class="form-label">Name <span class="text-danger">*</span></label>
                  <input type="text" class="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="e.g John Smith" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email Address <span class="text-danger">*</span></label>
                  <input type="text" class="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="username@address.com" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password <span class="text-danger">*</span></label>
                  <input type="password" class="form-control form-control-lg bg-white bg-opacity-5" />
                </div>

                <div class="mb-3">
                  <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditUser