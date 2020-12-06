const { createSlice } = require("@reduxjs/toolkit");

export const guestsSlice = createSlice({
  name: "guests",
  initialState: {
    family: [],
  },
  reducers: {
    getFamily: (state, action) => {
      /** Just a mock to actual fetch */
      const newArray = {
        id: "family-1",
        name: "Silva",
        side: "BRIDE",
        table: 10,
        members: [
          {
            id: 1,
            name: "João",
            confirmed: false,
          },
          {
            id: 2,
            name: "Maria",
            confirmed: false,
          },
          {
            id: 3,
            name: "José",
            confirmed: false,
          },
          {
            id: 4,
            name: "Pedro",
            confirmed: false,
          },
        ],
      };
      state.family = newArray;
    },
    toggleConfirmation: (state, action) => {
      const id = action.payload;
      const updatedMembers = state.family.members.map((member) => {
        if (member.id === id) {
          member.confirmed = !member.confirmed;
          return member;
        } else {
          return member;
        }
      });

      state.members = updatedMembers;
    },
  },
});

export const { getFamily, toggleConfirmation } = guestsSlice.actions;

export default guestsSlice.reducer;
