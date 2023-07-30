import { useState } from 'react';

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {   // ({ addTask }) passing prop as customform has access to it 
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {  //when you submit form it refreshes the whole pafe default behaviour
    e.preventDefault();     //prevent the default behaviour (form will not refresh automaticaly)
    addTask({
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task} // This binds the value of the input to the task variable 
          onInput={(e) => setTask(e.target.value)} //This sets up an event handler that triggers whenever the user types in the input field. It updates the task variable (or the state variable that holds the input value) with the current value of the input, effectively capturing what the user types.
          required
          autoFocus  // This attribute automatically focuses the input element when the page loads, so the user can start typing right away without clicking on the input.
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Enter Task</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm