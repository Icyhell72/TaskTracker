import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Checking the farm",
      day: "Aug 14th at 4:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Going to Univercity",
      day: "Sep 16th at 1:00pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Aug 5th at 6:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "Going to Gym",
      day: "Aug 12th at 5:30pm",
      reminder: true,
    },
  ]);
  const [showAddTask, setshowAddTask] = useState(false);
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    let deletedTask = tasks.filter((task) => task.id !== id);
    setTasks(deletedTask);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "There's no Tasks !"
      )}
    </div>
  );
}

export default App;
