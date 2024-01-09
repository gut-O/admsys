
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  registration: {
    username: '',
    password: '',
    name: '',
    email: '',
    birthdate: '',  
  },
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REGISTRATION_FIELD':
      return {
        ...state,
        registration: {
          ...state.registration,
          [action.field]: action.value,
        },
      };
    case 'RESET_REGISTRATION':
      return initialState;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});

export default store;