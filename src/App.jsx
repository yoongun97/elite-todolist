import React from "react";
import Todolist from "./Components/Todolist";
import Select from "./Components/Select";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    <>
      <Todolist />
      <br />
      <Select />
      <br />
      <DarkMode />
    </>
  );
}

export default App;
