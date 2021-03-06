const users = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      return [];
    }
    case "FETCH_USERS_SUCCESS": {
      return [...action.data];
    }
    case "FETCH_USERS_ERROR": {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default users;
