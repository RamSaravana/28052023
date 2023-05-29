export const generateDetail = (state, fieldObject) => {
  return { ...state, detail: { ...state.detail, ...fieldObject } };
};
