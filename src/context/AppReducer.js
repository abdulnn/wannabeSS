export default (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      return {
        ...state,
        employees: [action.payload, ...state.employees],
      };
    case "RESET":
      return {
        ...state,
      };
    default:
      return state;
  }
};
