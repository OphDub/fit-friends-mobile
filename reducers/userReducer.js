const initialUser = {
  userName: null,
  loggedIn: false,
};

export default userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...action.user, loggedIn: true }
    default:
      return state;
  }
};