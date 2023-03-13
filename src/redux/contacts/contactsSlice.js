import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

// Запрос контактов
const fetchContactSuccessReducer = (state, action) => {
  state.contacts.items = action.payload;
};

// Добавление контакта
const addContactSuccessReducer = (state, action) => {
  state.contacts.items.push(action.payload);
};

// Удаление контакта
const deleteContactSuccessReducer = (state, action) => {
  const index = state.contacts.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.contacts.items.splice(index, 1);
};

// Pending
const pendingReducer = state => {
  state.contacts.isLoading = true;
};

// Rejected
const rejectedReducer = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

// Общий Fulfilled
const fulfilledReducer = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

// contactsSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    contactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const { contactsFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// ---- *Вариант 2* ----

// // Общий Pending
// const handlePending = state => {
//   state.contacts.isLoading = true;
// };

// // Общий Rejected
// const handleRejected = (state, action) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = action.payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     contactsFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     // Запрос контактов
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,
//     // Добавление контакта
//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items.push(action.payload);
//     },
//     [addContact.rejected]: handleRejected,
//     // Удаление контакта
//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       const index = state.contacts.items.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.contacts.items.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const { contactsFilter } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
