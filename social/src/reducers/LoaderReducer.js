

export const LoaderReducer = (state, { type }) => {


  switch (type) {
    case "LOADING_START":
      return 100;

    case "LOADING_END":
      return 0;

    default:
      return state;
  }
};
