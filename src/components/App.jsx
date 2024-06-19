import { useState } from "react";
import Head from "./Head";
import Form from "./Form";
import Display from "./Display";
import Footer from "./Footer";

function App() {
  const [input, setinput] = useState("");
  const [tasks, settasks] = useState([]);

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleClick = (e) => {
    if (input.length < 1) {
      alert("Add a task");
    } else {
      settasks([...tasks, input]);
      setinput("");
    }
  };
  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    settasks(newTasks);
  };

  const handleClear = () => {
    settasks([]);
    console.log("what");
  };

  return (
    <div className="display-area">
      <Head />
      <Form value={input} onChange={handleChange} onClick={handleClick} />
      <Display tasks={tasks} onDelete={handleDelete} />
      <Footer tasks={tasks} handleClear={handleClear} />
    </div>
  );
}

export default App;
