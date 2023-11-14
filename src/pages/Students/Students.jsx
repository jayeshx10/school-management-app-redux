import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllStudents } from "../../actions";

export const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchAllStudents());
  });

  console.log(121, students);

  return <div className="students">STUDENTS: {students.length}</div>;
};

export default Students;
