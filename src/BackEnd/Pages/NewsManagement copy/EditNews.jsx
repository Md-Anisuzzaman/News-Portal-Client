import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { colourOptions } from './docs';
import { useParams } from 'react-router-dom';
import { asyncFetchNews } from '../../../Features/News/asyncReducers/fetchNews';
// import { asyncUpdateNews } from '../../../Features/News/asyncReducers/updateNews';

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


const EditNews = () => {

  const news = useSelector((state) => state.newsStore.news);
  // const [previewImage, setpreviewImage] = useState([]);
  const [newsData, setNewsData] = useState();

  const animatedComponents = makeAnimated();
  const editorRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();


  console.log("mera news", news);

  useEffect(() => {
    dispatch(asyncFetchNews(params.id))
  }, [dispatch, params.id])

  // setNewsData(news);
  // console.log("koi data", newsData);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let formData = new FormData(e.target);
  //   formData.append('_id', params.id);
  //   if (window.confirm("Update news?")) {
  //     dispatch(asyncUpdateNews(formData));
  //   }
  // }

  // const imageHandler = async (e) => {
  //   let files = await e.target.files;
  //   let temp_images = []
  //   let index = 1;
  //   for (const file of files) {
  //     temp_images.push(
  //       <img className='w-25 me-3' key={index++} src={window.URL.createObjectURL(file)} alt="" />
  //     )
  //     setpreviewImage(temp_images)
  //   }
  // }


  return (
    news ? (<div className="row justify-content-center" >
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <form action="" className='w-75 m-auto' method="POST" >
              <h1 className="text-center mb-4">Update News</h1>
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Title<span className="text-danger">*</span></label>
                  <input type="text" defaultValue={news.title} name='title' className="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="Please type title.." />
                </div>
                <div className="col-lg-6 mb-3">
                  <label className="form-label">Author<span className="text-danger">*</span></label>
                  <input type="text" defaultValue={news.author} name='author' className="form-control form-control-lg bg-white bg-opacity-5"
                    placeholder="Black Stone" />
                </div>
              </div>

              <div className="mb-3 col-lg-12">
                <label className="form-label">Category<span className="text-danger">*</span></label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={news.category.map(element => element)}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={colourOptions}
                  styles={customStyles}
                  name="category"
                />
              </div>

              <div className="mb-3 col-lg-12">
                <label className="form-label">Image<span className="text-danger">*</span></label>
                <input accept="image/*" type="file" multiple name='image[]' className="form-control form-control-lg bg-white bg-opacity-5" />
                {/* {
              news.image?.map(image => <img key={image} src={`${baseurl}/${image}`} className="w-50" alt={image} />)

            } */}

                {/* {previewImage} */}
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
    </div>) : <></>
  )
}

export default EditNews