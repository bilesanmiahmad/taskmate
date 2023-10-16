import { useState } from 'react'
import { TaskCard } from './TaskCard'
import { BoxCard } from './BoxCard'

export const TaskList = (props) => {
    // const [count, setCount] = useState(0)
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ])

    const [show, setShow] = useState(true)

    // const handleAdd = () => {
    //     setCount(count + 1)
    // }

    // const handleSub = () => {
    //     setCount(count - 1)
    // }

    // const handleReset = () => {
    //     setCount(0)
    // }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => id !== task.id))
    }

  return (
    <>
        <h1>Task List {props.title}</h1>
        <ul>
          <button className='trigger' onClick={()=> setShow(!show)}>Toggle</button>
          { show && tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
        </ul>
        <BoxCard result="success">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipis</p>
        </BoxCard>
        <BoxCard className="box warning">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipis</p>
        </BoxCard>
        <BoxCard className="box alert">
          <p className="title">Lorem ipsum dolor sit amet.</p>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipis</p>
        </BoxCard>
    </>  
  )
}
