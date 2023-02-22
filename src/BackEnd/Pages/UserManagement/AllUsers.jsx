import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../Features/User/userSlice';

const AllUsers = () => {
  const {users}  = useSelector((state) => state.users);
  console.log(users.name);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <div>
      <h1>All Users</h1>
    </div>
  )
}

export default AllUsers