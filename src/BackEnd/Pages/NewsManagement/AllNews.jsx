import React from 'react'
// import { Link } from 'react-router-dom'

const AllNews = () => {
  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All News</h3>
        </div>
        <div className="card-body">
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Author</th>
                  <th scope="col">Title</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {
                  users.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.username}</td>
                      <td>{user.role}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link to={`/dashboard/user/setrole/${user._id}/${encodeURI(user.username.replaceAll(' ', '-'))}`} className='btn btn-outline-info me-2'>Set Role</Link>
                        <Link to={`/dashboard/user/edituser/${user._id}/${encodeURI(user.username.replaceAll(' ', '-'))}`}><button className='btn btn-outline-success me-2'>Edit User</button></Link>
                        <button onClick={() => hndleDelete(user._id)} className='btn btn-outline-danger'>Delete</button>
                      </td>
                    </tr>
                  ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllNews