// component import
import TaskItem from './TaskItem';

// styles
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (  //This sorts the tasks array in descending order based on the id property of each task. The sort() function takes a comparison function that returns a positive number if b.id is greater, a negative number if a.id is greater, and 0 if they are equal. By sorting in descending order (b.id - a.id), the task with the highest id will be at the beginning of the array, and the task with the lowest id will be at the end.
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList