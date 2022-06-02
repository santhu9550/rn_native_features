import { ADD_NEW_PLACE } from "../constants";
import { v4 as uuidv4 } from "uuid";

export const createNewPlace = (title) => (dispatch) => {
  dispatch({
    type: ADD_NEW_PLACE,
    payload: {
      id: uuidv4(),
      title,
      createdDate: new Date().toISOString().slice(0, 10),
    },
  });
};
