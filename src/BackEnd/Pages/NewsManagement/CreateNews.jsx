import Select from 'react-select'

const CreateNews = () => {
    const options = [
        { name: "john", label: "john" },
        { name: "rabbil", label: "rabbil" },
        { name: "Rowsan", label: "Rowsan" },
    ]

    const handleChange = (selectedOption) => {
        console.log(selectedOption);
    }

    // const loadOptions = (searchValue, callback) => {
    //     setTimeout(() => {
    //         const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase())
    //         );
    //         console.log('loadOptions', searchValue, filteredOptions)
    //         callback(filteredOptions);
    //     }, 200);
    // };

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <form action="" className='w-75 m-auto' method="POST" >
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
                                {/* <select name='' onChange={handleChange} options={options} className="form-control form-control-lg bg-white bg-opacity-5" /> */}
                                <Select
                                    // className="form-control form-control-lg bg-white bg-opacity-5"
                                    styles={{
                                        control: (baseStyles, state) => ({
                                          ...baseStyles,
                                          borderColor: state.isFocused ? 'grey' : 'red',
                                        }),
                                      }}
                                    onChange={handleChange}
                                    options={options}
                                    isMulti
                                />


                            </div>

                            <div className="mb-3 col-lg-12">
                                <label className="form-label">Image<span className="text-danger">*</span></label>
                                <input type="file" name='image[]' className="form-control form-control-lg bg-white bg-opacity-5" />
                                { }
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Description<span className="text-danger">*</span></label>
                                <textarea className="form-control form-control-lg bg-white bg-opacity-5" name='description' cols="10" rows="3"></textarea>
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