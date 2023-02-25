import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchUsers } from '../../../Features/User/asyncReducers/fetchUsers';
import { Link } from 'react-router-dom';

const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserStore.users);

  useEffect(() => {
    dispatch(asyncFetchUsers());
  },[])

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All User</h3>
        </div>
        <div className="card-body">
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.user_created_at}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className='btn btn-outline-info me-2'>Set Role</button>
                        <Link to={`/dashboard/user/edituser/${user._id}/${encodeURI(user.username.replaceAll(' ', '-'))}`}><button className='btn btn-outline-success me-2'>Edit User</button></Link>
                        <button className='btn btn-outline-danger'>Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllUsers