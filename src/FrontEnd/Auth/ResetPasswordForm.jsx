import React, { useEffect } from 'react';
import { asyncResetPassForm } from '../../Features/User/asyncReducers/resetPassForm';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ResetPasswordForm = () => {
    const { isError, error, error_for, error_msg } = useSelector((state) => state.UserStore);
    const dispatch = useDispatch();
    const url = new URL(window.location.href);
    const token = url.hash.split('=')[1];

    // useEffect(() => {
    //     if(["token_error","password_match"].includes(error_for)){
    //         window.toast("error_for","error")
    //     }
    // }, [error_for, error_msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("userToken", token);
        dispatch(asyncResetPassForm(formData));
    }
    return (
        <>
            <div className="login">
                <div class="login-content">
                    <form onSubmit={handleSubmit} className='border p-5'>
                        <h1 class="text-center">Reset Password</h1>
                        <div class="text-white text-opacity-50 text-center mb-4">
                            To change your password, Enter your new password.
                        </div>
                        <div class="mb-4">
                            <div class="d-flex">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                            </div>
                            <input type="password" name='password' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="password" />
                        </div>

                        <div class="mb-4">
                            <div class="d-flex">
                                <label class="form-label">Re - Password <span class="text-danger">*</span></label>
                            </div>
                            <input type="password" name='re_password' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="re - password" />
                        </div>
                        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Sign In</button>
                        <div class="text-center text-white text-opacity-50">
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPasswordForm