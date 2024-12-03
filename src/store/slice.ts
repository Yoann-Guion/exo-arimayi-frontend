import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudent } from "@/app/@types/student";
import { thunkFetchStudents } from "./ThunkFetchStudents";

// Type for the slice state
interface StudentsState {
  students: IStudent[];
  loading: boolean;
  error: string | null;
}

// Initial state for the slice
const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null,
};

const studentsSlice = createSlice({
  name: "students details",
  initialState,
  reducers: {
    setStudents(state, action) {
      state.students = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunkFetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(thunkFetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(thunkFetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = "Failed to fetch students";
      });
  },
});

export const { setStudents, setLoading, setError } = studentsSlice.actions;
export default studentsSlice.reducer;
