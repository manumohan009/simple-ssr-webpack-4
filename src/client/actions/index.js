import axios from 'axios';
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get(`${process.env.API_BASE_PATH}/users`);

  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};
