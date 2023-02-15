import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import BackEndLayout from './BackEnd/Layouts/BackEndLayout';
import BackEndHome from './BackEnd/Pages/BackEndHome';
import { BackEndMessageAllMessage } from './BackEnd/Pages/Message/BackendPageList';
import AllUsers from './BackEnd/Pages/UserManagement/AllUsers';
import CreateUser from './BackEnd/Pages/UserManagement/CreateUser';
import EditUser from './BackEnd/Pages/UserManagement/EditUser';
import UsersLayout from './BackEnd/Pages/UserManagement/UsersLayout';
import FrontEndIndex from './FrontEnd/FrontEndIndex';
import FrontEndLayout from './FrontEnd/Layouts/FrontEndLayout';
import { FrontEndAbout, FrontEndContact } from './FrontEnd/Pages/FrontEndPagesLists';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path='' element={<FrontEndLayout />} >
          <Route index element={<FrontEndIndex />}></Route>
          <Route path='/about' element={<FrontEndAbout />}></Route>
          <Route path='/contact' element={<FrontEndContact />}></Route>
        </Route>

        <Route path='dashboard' element={<BackEndLayout />} >
          <Route path='' element={<BackEndHome />} />
          <Route path='all-message' element={<BackEndMessageAllMessage />} />

          <Route path='user' element={<UsersLayout />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="adduser" element={<CreateUser />} />
            <Route path="edituser" element={<EditUser />} />
          </Route>

        </Route>

      </Routes>
    </HashRouter>


  );
}

export default App;
