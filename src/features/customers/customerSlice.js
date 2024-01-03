import { createSlice } from "@reduxjs/toolkit";

const initialState = { fullName: "", nationalId: "", createAt: "" };

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
});

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
