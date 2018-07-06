const initialUser = {
  userName: null,
  loggedIn: false,
  isFetching: false,
  error: false,
  errorMessage: null
};

export default userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case 'FETCHING_USER':
      return {
        loggedIn: false,
        isFetching: true,
      }
    case 'FETCHING_USER_SUCCESS':
      return {
        ...action.user,
        loggedIn: true,
        isFetching: false,
      }
    case 'FETCHING_USER_FAILURE':
      return {
        ...action.user,
        isFetching: false,
        error: true,
        errorMessage: action.errorMessage
      }
    default:
      return state;
  }
};