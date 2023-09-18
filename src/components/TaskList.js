import { useState } from 'react'

export const TaskList = (props) => {
    const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ])

    const [show, setShow] = useState(true)

    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSub = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => id !== task.id))
    }

  return (
    <>
        <h1>Task List {props.title}</h1>
        <ul>
          <button className='trigger' onClick={()=> setShow(!show)}>Toggle</button>
          { show && tasks.map((task) => (
            <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
              <span>{task.id} - {task.name}</span>
              <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
            </li>
          ))}
        </ul>
        <div className="box">
            <p>{count}</p>
            <button onClick={handleAdd} className="add">ADD</button>
            <button onClick={handleSub} className="sub">SUB</button>
            <button onClick={handleReset} className="reset">RESET</button>
        </div>
    </>  
  )
}
