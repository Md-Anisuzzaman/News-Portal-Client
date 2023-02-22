import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Features/User/userSlice';

const AllUsers = () => {
  const {users}  = useSelector((state) => state.users);
  // console.log(users[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

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