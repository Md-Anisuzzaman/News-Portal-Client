import { HashRouter, Route, Routes } from "react-router-dom";
import BackEndLayout from './BackEnd/Layouts/BackEndLayout';
import BackEndHome from './BackEnd/Pages/BackEndHome';
import { BackEndMessageAllMessage } from './BackEnd/Pages/Message/BackendPageList';
import CreateNews from './BackEnd/Pages/NewsManagement/CreateNews';
import EditNews from './BackEnd/Pages/NewsManagement/EditNews';
import NewsLayout from './BackEnd/Pages/NewsManagement/NewsLayout';
import AllUsers from './BackEnd/Pages/UserManagement/AllUsers';
import CreateUser from './BackEnd/Pages/UserManagement/CreateUser';
import EditUser from './BackEnd/Pages/UserManagement/EditUser';
import SetRole from './BackEnd/Pages/UserManagement/SetRole';
import UsersLayout from './BackEnd/Pages/UserManagement/UsersLayout';
import Login from './FrontEnd/Auth/Login';
import PrivateRoute from './FrontEnd/Auth/PrivateRoute';
import Register from './FrontEnd/Auth/Register';
import FrontEndIndex from './FrontEnd/FrontEndIndex';
import FrontEndLayout from './FrontEnd/Layouts/FrontEndLayout';
import { FrontEndAbout, FrontEndContact } from './FrontEnd/Pages/FrontEndPagesLists';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path='' element={<FrontEndLayout />} >
          <Route index element={<FrontEndIndex />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='about' element={<FrontEndAbout />}></Route>
          <Route path='contact' element={<FrontEndContact />}></Route>
        </Route>

        <Route path='dashboard' element={<PrivateRoute><BackEndLayout /> </PrivateRoute>} >
          <Route path='' element={<BackEndHome />} />
          <Route path='all-message' element={<BackEndMessageAllMessage />} />

          <Route path='user' element={<UsersLayout />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="adduser" element={<CreateUser />} />
            <Route path="setrole/:id/:username" element={<SetRole />} />
            <Route path="edituser/:id/:username" element={<EditUser />} />
          </Route>
          <Route path='news' element={<NewsLayout />}>
            <Route path="addnews" element={<CreateNews />} />
            <Route path="editnews" element={<EditNews />} />
          </Route>
        </Route>

      </Routes>
    </HashRouter>


  );
}

export default App;
