/* eslint-disable default-case */
const initialState = {
  students: [],
  teachers: [],
  classView: [],
  schoolView: {}
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  const generateSchoolViewData = () => {
    const totalStudents = state.students.length;
    const calculateAverage = (students, type) => { // type -> ['attendance', 'marks']
      if (students.length === 0) {
        return 0; 
      }
      const sum = students.reduce((acc, curr) => acc + curr[type], 0);
      return sum / students.length;
    }
    // returns schoolViewData
    return {
      numberOfStudents: totalStudents,
      avgAttendance: calculateAverage(state.students, 'attendance'),
      avgMarks: calculateAverage(state.students, 'marks')
    }
    
  }

  switch (type) {
    case "addStudent": // object
      return {
        ...state,
        students: [...state.students, payload]
      }
    case "editStudent": // object --> targetID (number) + updatedData (obj)
      const updatedStudentsData = state.students.map((student) => {
        return (student.studentID === payload.targetID) ? payload.updatedData : student;
      });
      return {
        ...state,
        students: updatedStudentsData
      }
    case "deleteStudent": // studentID - number
      return {
        ...state,
        students: state.students.filter(({studentID}) => studentID !== payload)
      }
    case "viewStudents": // none
      return state;
    case "addTeacher": // object
      return {
        ...state,
        teachers: [...state.teachers, payload]
      }
    case "editTeacher": // object --> targetID (number) + updatedData (obj)
      const updatedTeachersData = state.teachers.map((teacher) => {
        return (teacher.teacherID === payload.targetID) ? payload.updatedData : teacher
      })
      return {
        ...state,
        teachers: updatedTeachersData
      }
    case "deleteTeacher": // teacherID (number)
      return {
        ...state,
        teachers: state.teachers.filter(({teacherID}) => teacherID !== payload)
      }
    case "viewTeachers": // none
      return state;
    case "filterByClass": // className - string
      return {
        ...state,
        classView: state.students.filter((student) => student.class === payload)
      }
    case "filterByGender": // none
      return {
        ...state,
        classView: state.students.filter((student) => student.gender === payload)
      }
    case "sortStudents": // proprty name (string) --> ['name', 'age', 'attendance', 'avgMarks']
      return {
        ...state,
        classView: state.students.sort((studentA, studentB) => studentA.payload - studentB.payload)
      }
    case "getSchoolView":
      return {
        ...state,
         schoolView: generateSchoolViewData()
      }
  }
}

export default reducer;