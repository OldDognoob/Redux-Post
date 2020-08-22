import * as types from "../State/actionTypes";

//step 1: Design the step needed for the application(slices of state)
const initialState = {
  items: [
    {
      id: "",
      name: "",
      number: 0,
    },
  ],
};

// step 3: Create a slice reducer per number of state
export function Reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.item],
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.filter((i) =>
          i.id === action.id ? { ...i, edit: !i.edit } : i
        ),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.item.id
            ? {
                ...i,
                name: action.item.name,
                number: action.item.number,
              }
            : i
        ),
      };
    default:
      return state;
  }
}
export default Reducer;
