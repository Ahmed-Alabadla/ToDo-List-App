import {
  BLOCKADDTASK,
  BLOCKUPDATENAME,
  BLOCKUPDATEPASSWORD,
  BLOCKUPDATETASK,
  HIDDENADDTASK,
  HIDDENUPDATENAME,
  HIDDENUPDATEPASSWORD,
  HIDDENUPDATETASK,
} from "./types";

// Add task
export const blockAddTaskAction = () => {
  return {
    type: BLOCKADDTASK,
  };
};
export const hiddenAddTaskAction = () => {
  return {
    type: HIDDENADDTASK,
  };
};

// Update task
export const blockUpdateTaskAction = () => {
  return {
    type: BLOCKUPDATETASK,
  };
};
export const hiddenUpdateTaskAction = () => {
  return {
    type: HIDDENUPDATETASK,
  };
};

// UpdatE name
export const blockUpdateNameAction = () => {
  return {
    type: BLOCKUPDATENAME,
  };
};
export const hiddenUpdateNameAction = () => {
  return {
    type: HIDDENUPDATENAME,
  };
};

// UpdatE name
export const blockUpdatePasswordAction = () => {
  return {
    type: BLOCKUPDATEPASSWORD,
  };
};
export const hiddenUpdatePasswordAction = () => {
  return {
    type: HIDDENUPDATEPASSWORD,
  };
};
