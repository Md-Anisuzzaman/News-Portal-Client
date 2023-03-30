import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncFetchAllNews } from '../../../Features/News/asyncReducers/fetchAllNews';

const AllNews = () => {

  const dispatch = useDispatch();
  // const params = useParams();
  const allNews = useSelector((state) => state.newsStore.allNews);
  console.log("pao", allNews);

  useEffect(() => {
    const result = dispatch(asyncFetchAllNews());
    console.log("amar", result);
  }, [dispatch])

  return (
    <div className='container'>
      <div className="card">
        <div className="card-header">
          <h3>All News</h3>
        </div>
        <div className="card-body">
          <div className="table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Author</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  allNews?.map(news => (
                    <tr key={news._id}>
                      <td>{news._id}</td>
                      <td>{news.author}</td>
                      <td>{news.title}</td>
                      <td>{news.description}</td>
                      <td>{news.email}</td>
                      <td>
                        <Link to='/dashboard/news/editnews'><button className='btn btn-outline-success me-2'>Edit News</button></Link>
                        <button className='btn btn-outline-danger'>Delete</button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllNews