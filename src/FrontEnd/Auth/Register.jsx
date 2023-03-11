import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { asyncRegister } from '../../Features/Auth/asyncReducers/registerUser';


const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authenticated } = useSelector((state) => state.auth);
    console.log(authenticated);

    const handleRegister = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.target)
        dispatch(asyncRegister(formData))
    };

    useEffect(() => {
        console.log(authenticated);
        if (authenticated) {
            navigate("/dashboard");
        }
    }, [authenticated])

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
                            <input type="text" name='username' class="form-control form-control-lg bg-white bg-opacity-5" required placeholder="username" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" name='email' class="form-control form-control-lg bg-white bg-opacity-5" required placeholder="user email" />
                        </div>
                        <div class="mb-4">
                            <div class="d-flex">
                                <label class="form-label">Password <span class="text-danger">*</span></label>
                            </div>
                            <input type="password" name='password' class="form-control form-control-lg bg-white bg-opacity-5" required placeholder="password" />
                        </div>

                        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register