
let UserManagement = {
  state: {
    users: [],
    user: {},
  },

  setters: {
    set_users(state){
      state.users = [{name: 'John'},{name: 'wick'}]
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


UserManagement.setters.set_users.bind(UserManagement)(UserManagement.state);
UserManagement.setters.set_user.bind(UserManagement)(UserManagement.state.users[1]);

let data = UserManagement.getters.get_user.bind(UserManagement)();
data.name = 'ethian'
