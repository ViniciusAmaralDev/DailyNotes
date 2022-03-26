import { Note, State } from "../interfaces";
import { addNote, editNote, deleteNote, handleSelectedNote } from "./Note";

type Action =
  | { type: "addNote"; payload: Note | any }
  | { type: "editNote"; payload: Note | any }
  | { type: "deleteNote"; payload: number | any }
  | { type: "handleSelectedNote"; payload: number | any };

const actions = {
  addNote,
  editNote,
  deleteNote,
  handleSelectedNote,
};

export default (state: State, action: Action) => {
  const fn = actions[action.type];
  return fn ? fn(state, action) : state;
};
