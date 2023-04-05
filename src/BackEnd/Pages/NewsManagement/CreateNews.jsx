import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch } from 'react-redux';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { asyncCreateNews } from '../../../Features/News/asyncReducers/createNews';
import { colourOptions } from './docs';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderRadius: '10px',
        borderColor: state.isFocused ? '#00BFFF' : 'rgba(0, 0, 0, 0.3)',
        boxShadow: state.isFocused ? '0 0 0 1px #00BFFF' : 'none',
        '&:hover': {
            borderColor: state.isFocused ? '#00BFFF' : 'rgba(0, 0, 0, 0.5)',
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#00BFFF' : 'white',
        color: state.isSelected ? 'white' : 'black',
        '&:hover': {
            backgroundColor: state.isSelected ? '#00BFFF' : '#F5F5F5',
        }
    })
};

const CreateNews = () => {
    const [previewImage, setpreviewImage] = useState([]);
    const animatedComponents = makeAnimated();
    const editorRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append('description', editorRef.current.getContent());
        dispatch(asyncCreateNews(formData))
        e.currentTarget.reset();
        console.log(e.currentTarget);
        setpreviewImage('');
    }

    const imageHandler = async (e) => {
        e.preventDefault();
        let files = await e.target.files;
        let temp_images = [];
        let index = 1;
        for (const file of files) {
            temp_images.push(
                <img className='w-25 me-3' key={index++} src={window.URL.createObjectURL(file)} alt="" />
            )
            setpreviewImage(temp_images)
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} action="" className='w-75 m-auto' method="POST" >
                            <h1 className="text-center mb-4">Create News</h1>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label className="form-label">Title<span className="text-danger">*</span></label>
                                    <input type="text" name='title' className="form-control form-control-lg bg-white bg-opacity-5"
                                        placeholder="Please type title.." />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label className="form-label">Author<span className="text-danger">*</span></label>
                                    <input type="text" name='author' className="form-control form-control-lg bg-white bg-opacity-5"
                                        placeholder="Black Stone" />
                                </div>
                            </div>

                            <div className="mb-3 col-lg-12">
                                <label className="form-label">Category<span className="text-danger">*</span></label>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    // defaultValue={[colourOptions[4], colourOptions[5]]}
                                    isMulti
                                    options={colourOptions}
                                    styles={customStyles}
                                    name="category"
                                />
                            </div>

                            <div className="mb-3 col-lg-12">
                                <label className="form-label">Image<span className="text-danger">*</span></label>
                                <input onChange={imageHandler} accept="image/*" type="file" multiple name='image[]' className="form-control form-control-lg bg-white bg-opacity-5" />
                                {previewImage}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description<span className="text-danger">*</span></label>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    // initialValue="<p>This is the initial content of the editor.</p>"
                                    init={{
                                        height: 200,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                                {/* <textarea className="form-control form-control-lg bg-white bg-opacity-5" name='description' cols="10" rows="3"></textarea> */}
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-outline-theme btn-lg d-block w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNews