import { Header } from './components/Header'
import { TaskList } from './components/TaskList'
import "./App.css"

const App = () => {
  
  return (
    <div className="App">
      <Header />
      <TaskList title="Random"/>  
    </div>
  )
}

export default App
