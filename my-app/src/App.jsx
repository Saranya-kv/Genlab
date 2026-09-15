import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;