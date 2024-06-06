import "./TodoList.css"
import {useState} from "react";
export default function TodoList(){
    return(
       <>
       <h2>Todo List Title</h2>
          <form className="new-form-item">
            <div className="form-row">
                <label>New Item</label>
                <input type="text" id="item"/>
            </div>
            <button className="add">Add</button>
          </form>
          <div className="list">
            <ul>
                <li>
                <label>
                <input className="checkbox" type="checkbox"/> Item1
                </label>
                 <button className="btn btn-danger">Delete</button>
                </li>
                <li>
                <label>
                <input className="checkbox" type="checkbox"/> Item1
                </label>
                 <button className="btn btn-danger">Delete</button>
                </li>
                <li>
                <label>
                <input className="checkbox" type="checkbox"/> Item1
                </label>
                 <button className="btn btn-danger">Delete</button>
                </li>
            </ul>
           
          </div>
       </>
    );
}