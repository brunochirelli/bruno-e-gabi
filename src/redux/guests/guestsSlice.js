const { createSlice } = require("@reduxjs/toolkit");

export const guestsSlice = createSlice({
  name: "guests",
  initialState: {
    id: "family-1",
    family: "Silva",
    side: "BRIDE",
    members: [
      {
        name: "João",
        confirmed: false,
      },
      {
        name: "Maria",
        confirmed: false,
      },
      {
        name: "José",
        confirmed: false,
      },
      {
        name: "Pedro",
        confirmed: false,
      },
    ],
    table: 10,
  },
  reducers: {},
});

export default guestsSlice.reducer;
