import React, { useState } from 'react'
import "./Todo.css"
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([])


    const handlerInputChange = (value) => {
        setInputValue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;
        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        } 
        
        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");
    }
  return (
      <section className='todo-container'>
          <header>
              <h1>Todo List</h1>
          </header>
          <section className='form'>
              <form onSubmit={handleFormSubmit}>
                  <div>
                      <input
                          type="text"
                          className='todo-input'
                          autoComplete="off"
                          value={inputValue}
                          onChange={(event)=> handlerInputChange(event.target.value)}
                      />
                  </div>
                  <div>
                      <button type='submit' className='todo-btn'>Add Task   </button>
                  </div>
              </form>
          </section>
          <section className='myUnOrdList'>
              <ul>
                  {
                      task.map((item, index) => {
                          return (
                              <li key={index} className='todo-item'>
                                  <span>{item}</span>
                                  <button className='check-btn'><MdCheck style={{fontSize:"30px"}} /></button>
                                  <button className='delete-btn'><MdDeleteForever /></button>
                              </li>
                          );
                      })
                  }
              </ul>
              
          </section>
       
    </section>
  )
}

export default Todo
