import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncDeleteNews } from '../../../Features/News/asyncReducers/deleteNews';
import { asyncFetchAllNews } from '../../../Features/News/asyncReducers/fetchAllNews';
// import parse from 'html-react-parser';

const AllNews = () => {
  // const [showFullText, setShowFullText] = useState(false);
  const dispatch = useDispatch();
  const allNews = useSelector((state) => state.newsStore.allNews);

  // const toggleText = () => {
  //   setShowFullText(!showFullText);
  // };

  useEffect(() => {
    dispatch(asyncFetchAllNews());
  }, [dispatch])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      await dispatch(asyncDeleteNews(id));
      await dispatch(asyncFetchAllNews());
    }
  }

  const HtmlToText = (html) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, 'text/html');
    const plainText = parsedHtml.documentElement.textContent;
    console.log(typeof (plainText));
    // const result = plainText.split(" ").slice(0, 5).join(" ");
    // return <p>{result}</p>;
    return <p>{plainText}</p>;
  }

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
                  <th scope="col">Image</th>
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
                      <td><img style={{ width: "50px" }} src={`http://localhost:8000/${news.image}`} alt={news.image} /></td>
                      <td>{news.author}</td>
                      <td>{news.title}</td>
                      {/* <td>{showFullText ? news.description : (`${news.description.split(" ").slice(0, 3).join("  ")}...`)}
                        <button className='btn btn-outline-info' onClick={toggleText}>
                          {showFullText ? "Show less" : "Show more"}
                        </button></td>
                      <td> */}
                      {/* <td>{showFullText ? HtmlToText(news.description) : (`${HtmlToText(news.description).split(" ").slice(0, 3).join("  ")}...`)}
                        <button className='btn btn-outline-info' onClick={toggleText}>
                          {showFullText ? "Show less" : "Show more"}
                        </button></td> */}

                      <td>{HtmlToText(news.description)}</td>
                      <td>
                        <Link to={`/dashboard/news/editnews/${news._id}/${encodeURI(news.title.replaceAll(' ', '-'))}`}><button className='btn btn-outline-success me-2'>Edit News</button></Link>
                        <button onClick={() => handleDelete(news._id)} className='btn btn-outline-danger'>Delete</button>
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