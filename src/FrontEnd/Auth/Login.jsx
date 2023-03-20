import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { asyncLogin } from '../../Features/Auth/asyncReducers/loginUser';
import { removeErrors } from '../../Features/Auth/authSlice';


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { authenticated, formErrors } = useSelector((state) => state.auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        dispatch(asyncLogin(formData));
    };

    useEffect(() => {
        if (authenticated) {
            navigate("/dashboard");
        }
        dispatch(removeErrors({}));
    }, [authenticated,navigate,dispatch])

    return (
        <>
            <div className="login">
                <div class="login-content">
                    <form onSubmit={handleLogin} className='border p-5'>
                        <h1 class="text-center">Sign In</h1>
                        <div class="text-white text-opacity-50 text-center mb-4">
                            For your protection, please verify your identity.
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" name='email' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="user email" />
                            <ul className='text-danger m-2'>{formErrors.email}</ul>
                        </div>
                        <div class="mb-4">
                            <div class="d-flex">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                                <Link class="ms-auto text-white text-decoration-none text-opacity-50">Forgot password?</Link>
                            </div>
                            <input type="password" name='password' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="password" />
                            <ul className='text-danger m-2'>{formErrors.password}</ul>
                        </div>

                        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Sign In</button>
                        <div class="text-center text-white text-opacity-50">
                            Don't have an account yet? <Link to='/register'>Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login