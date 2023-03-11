import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { asyncFetchUser } from '../../../Features/User/asyncReducers/fetchUser';
import { asyncUpdateUser } from '../../../Features/User/asyncReducers/updateUser';

const EditUser = () => {
    const [previewImage, setpreviewImage] = useState([])
    const user = useSelector((state) => state.UserStore.user);
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById('editForm').reset();
        dispatch(asyncFetchUser(params.id));
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        formData.append('_id', params.id);
        if (window.confirm("Update user?")) {
            dispatch(asyncUpdateUser(formData));
        }
    }

    const imageHandler = async (e) => {
        let files = await e.target.files;
        let temp_images = []
        let index = 1;
        for (const file of files) {
            temp_images.push(
                <img className='w-25 me-3' key={index++} src={window.URL.createObjectURL(file)} alt="" />
            )
            setpreviewImage(temp_images)
        }
    }

    return (
        user ?
            (<div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <form action="" id='editForm' onSubmit={handleSubmit} className='w-75 m-auto' method="POST" >
                                <h1 className="text-center mb-4">Update user profile</h1>
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="form-label">Name <span className="text-danger">*</span></label>
                                        <input type="text" name='username' defaultValue={user.username} className="form-control form-control-lg bg-white bg-opacity-5"
                                            placeholder="e.g John Smith" />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label className="form-label">Email Address <span className="text-danger">*</span></label>
                                        <input type="text" name='email' defaultValue={user.email} className="form-control form-control-lg bg-white bg-opacity-5"
                                            placeholder="username@address.com" />
                                    </div>
                                </div>


                                <div className="col-lg-12 mb-3">
                                    <label className="form-label">Password <span className="text-danger">*</span></label>
                                    <input type="password" name='password' defaultValue={user.password} className="form-control form-control-lg bg-white bg-opacity-5" />
                                </div>


                                <div className="row">
                                    <div className="mb-3 col-lg-6">
                                        <label className="form-label">Mobile <span className="text-danger">*</span></label>
                                        <input type="text" name='mobile' defaultValue={user.mobile} className="form-control form-control-lg bg-white bg-opacity-5" />
                                    </div>
                                    <div className="mb-3 col-lg-6 ">
                                        <label className="form-label">Gender : <span className="text-danger">*</span></label>
                                        <div className='d-flex p-2 bg-white bg-opacity-5 border border-secondary rounded-3 gap-2'>
                                            <label className='me-2'>
                                                <input type="radio" value="Male" defaultValue={user.Male} name="gender" className='me-1' />
                                                Male
                                            </label>
                                            <label>
                                                <input type="radio" value="Female" name="gender" defaultValue={user.Female} className='me-1' />
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address<span className="text-danger">*</span></label>
                                    <textarea className="form-control form-control-lg bg-white bg-opacity-5" name='address' defaultValue={user.address} cols="10" rows="2"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Image<span className="text-danger">*</span></label>
                                    <input onChange={imageHandler} type="file" name='image[]' multiple className="form-control form-control-lg bg-white bg-opacity-5" />
                                    {/* {
                                        user.image?.map(image => <img key={image} src={`${baseurl}/${image}`} className="w-50" alt={image} />)
                                    } */}
                                    {previewImage}

                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>) : <></>
    )
}

export default EditUser