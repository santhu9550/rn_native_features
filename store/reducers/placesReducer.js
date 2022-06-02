import { ADD_NEW_PLACE } from "../constants";
const initialState = { list: { loading: false, data: [] } };

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_PLACE:
      return {
       
        list: { loading: false, data: [payload, ...state.list.data] },
      };
    default:
      return state;
  }
};
