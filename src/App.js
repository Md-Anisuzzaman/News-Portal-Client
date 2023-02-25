import React from 'react';
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
import UsersLayout from './BackEnd/Pages/UserManagement/UsersLayout';
import FrontEndIndex from './FrontEnd/FrontEndIndex';
import FrontEndLayout from './FrontEnd/Layouts/FrontEndLayout';
import { FrontEndAbout, FrontEndContact } from './FrontEnd/Pages/FrontEndPagesLists';

let UserManagement = {
  state: {
    users: [],
    user: {},
  },

  setters: {
    set_users(){
      this.state.users = [{name: 'John'},{name: 'wick'}]
    },
    set_user: function(user){
      this.state.user = user;
    }
  },

  getters: {
    get_users: function(){
      return {...this.state}.users;
    },
    get_user: function(){
      return {...this.state.user};
    },
  }

};


UserManagement.setters.set_users.bind(UserManagement)();
UserManagement.setters.set_user.bind(UserManagement)(UserManagement.state.users[1]);

let data = UserManagement.getters.get_user.bind(UserManagement)();
data.name = 'ethian'

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path='' element={<FrontEndLayout />} >
          <Route index element={<FrontEndIndex />}></Route>
          <Route path='about' element={<FrontEndAbout />}></Route>
          <Route path='contact' element={<FrontEndContact />}></Route>
        </Route>

        <Route path='dashboard' element={<BackEndLayout />} >
          <Route path='' element={<BackEndHome />} />
          <Route path='all-message' element={<BackEndMessageAllMessage />} />

          <Route path='user' element={<UsersLayout />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="adduser" element={<CreateUser />} />
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
