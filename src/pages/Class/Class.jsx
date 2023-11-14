import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Class.scss";
import { filterByClass, filterByGender } from "../../actions";

export const Class = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");

  const handleClassChange = (e) => {
    console.log(e.target.value);
    setClassName(e.target.value);
  };

  const handleGenderChange = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  useEffect(() => {
    dispatch(filterByClass());
    dispatch(filterByGender());
  }, [className, gender]);

  return (
    <div className="class">
      <label htmlFor="class-dropdown" className="class__label">
        CLASS:{" "}
      </label>
      <select
        id="class-dropdown"
        className="class__dropdown"
        onChange={handleClassChange}
      >
        <option value="">Select class</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <label htmlFor="gender-dropdown" className="class__label">
        CLASS:{" "}
      </label>
      <select
        id="gender-dropdown"
        className="class__dropdown"
        onChange={handleGenderChange}
      >
        <option value="">Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default Class;
