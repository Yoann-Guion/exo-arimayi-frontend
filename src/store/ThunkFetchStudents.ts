import { createAsyncThunk } from "@reduxjs/toolkit";
import { studentsDetails } from "@/app/assets/studentsDetails";
import { IStudent } from "@/app/@types/student";

export const thunkFetchStudents = createAsyncThunk<IStudent[], void>(
  "students/fetchStudents",
  async () => {
    // Simuler un appel API pour récupérer les données
    return new Promise<IStudent[]>((resolve) => {
      setTimeout(() => {
        resolve(studentsDetails);
      }, 1000);
    });
  }
);
