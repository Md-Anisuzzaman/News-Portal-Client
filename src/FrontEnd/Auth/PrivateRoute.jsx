import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { setPath } from "../../Features/Auth/authSlice";

const PrivateRoute = ({ children, ...rest }) => {

  const { authenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch()
  const location = useLocation()
  const path = location.pathname;

  useEffect(() => {
    dispatch(setPath(path));
  }, [dispatch, location, path])

  if (authenticated) {
    return children;
  }
  else {
    return <Navigate to="/login"/>
  }

};

export default PrivateRoute;
