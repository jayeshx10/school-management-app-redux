export const fetchAllStudents = () => {
    return {
      type: 'viewStudents',
    };
};

export const addStudent = (payload) => {
  return {
    type: "addStudent",
    payload
  }
}

export const editStudent = (payload) => {
  return {
    type: "editStudent",
    payload
  }
}

export const deleteStudent = (payload) => {
  return {
    type: "deleteStudent",
    payload
  }
}

export const addTeacher = (payload) => {
  return {
    type: "addTeacher",
    payload
  }
}

export const deleteTeacher = (payload) => {
  return {
    type: "deleteTeacher",
    payload
  }
}

export const fetchAllTeachers = () => {
  return {
    type: 'viewTeachers',
  };
};

export const filterByClass = (payload) => {
  return {
    type: 'filterByClass',
    payload
  };
};

export const filterByGender = (payload) => {
  return {
    type: 'filterByGender',
    payload
  };
};

export const sortStudents = (payload) => {
  return {
    type: 'sortStudents',
    payload
  };
};

export const getSchoolView = () => {
  return {
    type: 'getSchoolView',
  };
};
