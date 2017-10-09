const initialState = {
  authenticated: false,
  error: null,
  user: null,
  loading: false
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "AUTH_USER":
      return {
        ...state,
        authenticated: false,
        error: null,
        loading: true
      };
    default:
      return state;
  }
}
