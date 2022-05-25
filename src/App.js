import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import View from "./component/View";
import { Routes, Route } from "react-router-dom";
import Table from "./component/Table";

export default function App() {
  return (
    <div>
      <Table />
      {/* <View /> */}
      {/* <Routes>
        <Route path="/" element={<View />} />
        <Route path="/table/:id" element={<Table />} />
      </Routes> */}
    </div>
  );
}
