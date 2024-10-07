import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: number;
  name: string;
  email: string;
  status: "free" | "busy" | "workin" | "onVacation";
  role: "reporter" | "botAnalyst" | "salesManager" | "broadcaster" | "marketer";
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "free",
      role: "reporter",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "busy",
      role: "salesManager",
    },
  ],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
  },
});

export const { addEmployee, removeEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
