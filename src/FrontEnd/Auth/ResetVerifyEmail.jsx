import { useDispatch, useSelector } from "react-redux";
import { asyncResetVerify } from "../../Features/User/asyncReducers/resetVerifyEmail";
import { verifyEmailErr } from "../../Features/User/usersSlice";
import { asyncFetchUser } from "../../Features/User/asyncReducers/fetchUser";

const ResetVerifyEmail = () => {
    const { formErrors} = useSelector((state) => state.UserStore);
    const dispatch = useDispatch();
    // useEffect(() => {
    // }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        dispatch(asyncResetVerify(formData))
        dispatch(asyncFetchUser)

        // e.currentTarget.reset();
        dispatch(verifyEmailErr({}));
        // console.log(e.currentTarget);
        // if (success_msg === "success") {
        //     window.toast("Your password reset email was sent to your verified email. Please check!");
        // }
    }

    return (
        <>
            <div className="login">
                <div class="login-content">
                    <form onSubmit={handleSubmit} className='border p-5'>
                        <h1 class="text-center">Verify your Email</h1>
                        <div class="text-white text-opacity-50 text-center mb-4">
                            To reset your password, please verify your email which you sign.
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address <span class="text-danger">*</span></label>
                            <input type="text" name='email' class="form-control form-control-lg bg-white bg-opacity-5" placeholder="user email" />
                            <ul className='text-danger m-2'>{formErrors.email}</ul>
                        </div>
                        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100 fw-500 mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetVerifyEmail