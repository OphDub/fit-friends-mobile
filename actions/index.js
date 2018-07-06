export const getUser = () => ({
  type: 'FETCHING_USER'
});

export const getUserSuccess = (user) => ({
  type: 'FETCHING_USER_SUCCESS',
  user
});

export const getUserFail = () => ({
  type: 'FETCHING_USER_FAILURE'
});