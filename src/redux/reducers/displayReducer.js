import {
  BLOCKADDTASK,
  BLOCKUPDATENAME,
  BLOCKUPDATEPASSWORD,
  BLOCKUPDATETASK,
  HIDDENADDTASK,
  HIDDENUPDATENAME,
  HIDDENUPDATEPASSWORD,
  HIDDENUPDATETASK,
} from "../actions/types";
const displayReducer = (
  state = {
    displayAddTask: "hidden",
    displayUpdateTask: "hidden",
    displayUpdateName: "hidden",
    displayUpdatePassword: "hidden",
  },
  action
) => {
  switch (action.type) {
    case BLOCKADDTASK:
      return { ...state, displayAddTask: (state.displayAddTask = "block") };
    case HIDDENADDTASK:
      return { ...state, displayAddTask: (state.displayAddTask = "hidden") };

    case BLOCKUPDATETASK:
      return {
        ...state,
        displayUpdateTask: (state.displayUpdateTask = "block"),
      };
    case HIDDENUPDATETASK:
      return {
        ...state,
        displayUpdateTask: (state.displayUpdateTask = "hidden"),
      };

    case BLOCKUPDATENAME:
      return {
        ...state,
        displayUpdateName: (state.displayUpdateName = "block"),
      };
    case HIDDENUPDATENAME:
      return {
        ...state,
        displayUpdateName: (state.displayUpdateName = "hidden"),
      };

    case BLOCKUPDATEPASSWORD:
      return {
        ...state,
        displayUpdatePassword: (state.displayUpdatePassword = "block"),
      };
    case HIDDENUPDATEPASSWORD:
      return {
        ...state,
        displayUpdatePassword: (state.displayUpdatePassword = "hidden"),
      };

    default:
      return state;
  }
};

export default displayReducer;
