import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { asyncRegister } from '../../Features/Auth/asyncReducers/registerUser';


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [formErrors, setFormErrors] = useState();
    const { authenticated, error } = useSelector((state) => state.auth);
    // console.log("sob error-->", error);

    // let tempError = formErrors;

    // if()

    const handleRegister = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        dispatch(asyncRegister(formData))
    };

    useEffect(() => {

        console.log("error paisi new",error);

    }, [error])


    useEffect(() => {
        console.log(authenticated);
        if (authenticated) {
            navigate("/dashboard");
        }
    }, [authenticated, navigate])


    return (
        <>
            <div className="login">
                <div class="login-content">
                    <form className='border p-5' onSubmit={handleRegister} >
                        <h1 class="text-center">Sign Up</h1>
                        <div class="text-white text-opacity-50 text-center mb-4">
                            For your protection, please verify your identity.
                        </div>
                        <div class="mb-3">
                            <label class="form-label">User Name<span class="text-danger">*</span></label>
                            <input type="text" name='username' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="username" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" name='email' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="user email" />
                        </div>
                        <div class="mb-4">
                            <div class="d-flex">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                            </div>
                            <input type="password" name='password' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="password" />
                        </div>
                        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Sign Up</button>
                        <div class="text-center text-white text-opacity-50">
                            Already have an account? <Link to='/login'>Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register