import { Note, State } from "../interfaces";

export const notes = [
  {
    id: 0,
    favorite: true,
    selected: false,
    created_at: "2022-03-24T13:51:17.860Z",
    updated_at: "2022-03-24T13:51:17.860Z",
    title: "What is Lorem Ipsum?",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  },
  {
    id: 1,
    favorite: true,
    selected: false,
    created_at: "2022-03-24T13:51:17.860Z",
    updated_at: "2022-03-24T13:51:17.860Z",
    title: "What is Lorem Ipsum?",
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
  },
];

export const addNote = (state: State, action: { payload: Note }): State => ({
  ...state,
  notes: [...state.notes, action.payload],
});

export const editNote = (state: State, action: { payload: Note }): State => {
  const { id, title, description } = action.payload;

  const notes = state.notes.map((note) => {
    if (note.id === id) {
      note.title = title;
      note.description = description;
    }
    return note;
  });

  return { ...state, notes };
};

export const deleteNote = (
  state: State,
  action: { payload: number }
): State => {
  const notes = state.notes.filter((note) => note.id !== action.payload);

  return { ...state, notes };
};

export const handleSelectedNote = (
  state: State,
  action: { payload: number }
): State => {
  const notes = state.notes.map((note) => {
    if (note.id === action.payload) {
      note.selected = !note.selected;
    }
    return note;
  });
  
  return { ...state, notes };
};
