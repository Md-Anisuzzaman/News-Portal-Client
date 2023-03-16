import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { asyncFetchUser } from '../../../Features/User/asyncReducers/fetchUser';
import { asyncSetRole } from '../../../Features/User/asyncReducers/setRole';

const SetRole = () => {
    const user = useSelector((state) => state.UserStore.user);
    const params = useParams();
    const dispatch = useDispatch()
    const [role, setRole] = useState('');

    useEffect(() => {
        dispatch(asyncFetchUser(params.id));
    },[])

    useEffect(() => {
        setRole(user.role)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('_id', params.id);
        dispatch(asyncSetRole(formData))
        window.alert("User role updated successfully");
    }

    const roles = function () {
        return [
            'user',
            'super admin',
            'admin',
            'subscriber',
            'new',
            'new2'
        ]
    }

    return (
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <form action="" onSubmit={handleSubmit} className='w-50 m-auto' method="POST" >
                                <h1 className="text-center mb-4">Set Role</h1>
                                <div className="col-lg-12 mb-3">
                                    <label className="form-label">Set User Role<span className="text-danger">*</span></label>
                                    <select value={role} onChange={(e)=>setRole(e.target.value)} className="form-select bg-white bg-opacity-5" type="text" name="role" >
                                        {
                                            roles().map(role => <option key={role} value={role}>{role}</option>)
                                        }
                                    </select>
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
}

export default SetRole