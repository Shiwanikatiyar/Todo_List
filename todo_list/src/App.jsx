import { useState } from 'react'
import './App.css'

function App() {

  let [todolist, setTodolist] = useState([])

  let saveTodoList = (event) => {


    let todoName = event.target.todoName.value;
    // alert(todoName)
    if (!todolist.includes(todoName)) {
      let finalTodolist = [...todolist, todoName]
      setTodolist(finalTodolist)

    }
    else {
      alert("Todo Already Exists")
    }

    event.preventDefault();
  }

  let list = todolist.map((value,index) =>{
    return(
      <TodoListItems value= {value} key={index} indexNumber = {index} 
      todolist= {todolist}
      setTodolist= {setTodolist}
      />
    )
  })

  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form onSubmit={saveTodoList} >
        <input type="text" name='todoName' /> <button>Save</button>
      </form>

      <div className="outer-div">
        <ul>
       {list}
        </ul>
      </div>
    </div>


  )
}

export default App

function TodoListItems({value, indexNumber, todolist, setTodolist}){
 
  let [status, setStatus] = useState(false)
  let deleteRow= ()=>{
    // alert(indexNumber)
    let finalData = todolist.filter((value,index)=> index!=indexNumber)
    setTodolist(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }

  return (

    <li className={(status)? 'completeTodo': ''} onClick={checkStatus}>{indexNumber + 1} - {value} <span onClick={deleteRow}>&times;</span></li>
  )
}