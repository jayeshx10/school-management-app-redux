import React from "react";
import { Routes, Route } from "react-router-dom";

import SchoolView from "../../pages/SchoolView/SchoolView";
import Class from "../../pages/Class/Class";
import Students from "../../pages/Students/Students";
import Teachers from "../../pages/Teachers/Teachers";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SchoolView />} />
      <Route path="/class" element={<Class />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
};

export default AllRoutes;
