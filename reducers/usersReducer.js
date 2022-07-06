import ACTION_TYPES from './../actions/actionTypes';

const initialState = {
  users: [],
  error: null,
  isFetching: false,
};

function usersReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { payload } = action;
      const newUsers = [...payload];
      return {
        ...state,
        isFetching: false,
        users: newUsers,
      };
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    default:
      return state;
  }
}
export default usersReducer;
