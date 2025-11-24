import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import type { Todo, Filter } from '../types';

type TodoState = {
  items: Todo[];
  filter: Filter;
};

const initialState: TodoState = {
  items: [],
  filter: 'all',
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      prepare: (title: string) => ({
        payload: { id: nanoid(), title: title.trim(), done: false } as Todo,
      }),
      reducer: (state, action: PayloadAction<Todo>) => {
        if (action.payload.title) state.items.unshift(action.payload);
      },
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const t = state.items.find(x => x.id === action.payload);
      if (t) t.done = !t.done;
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
    clearDone: (state) => {
      state.items = state.items.filter(t => !t.done);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, clearDone, setFilter } = slice.actions;
export default slice.reducer;
