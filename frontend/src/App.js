import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.completed ? 'Completed' : 'Pending'}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
