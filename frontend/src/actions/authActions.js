// authActions.js

export const login = (userData) => {
  return {
    type: 'LOGIN',
    payload: userData
  };
};
  
export const logout = () => {
  return {
    type: 'LOGOUT'
  };
};

export const updateUserName = (newName) => ({
    type: 'UPDATE_USER_NAME',
    payload: newName,
  }
);

export const updateAddress = (newAddress) => ({
      type: 'UPDATE_ADDRESS',
      payload: newAddress
  }
);

export const updateCollege = (newCollege) => ({
  type: 'UPDATE_COLLEGE',
  payload: newCollege
  }
);

export const updateBranch = (newBranch) => ({
      type: 'UPDATE_BRANCH',
      payload: newBranch
  }
);

export const updateEmail = (newEmail) => ({
  type: 'UPDATE_EMAIL',
  payload: newEmail,
});

export const updateGraduationYear = (newGraduationYear) => ({
      type: 'UPDATE_GRADUATION_YEAR',
      payload: newGraduationYear
  }
);
