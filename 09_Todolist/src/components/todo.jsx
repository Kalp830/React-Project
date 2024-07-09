import React,{useState} from 'react'
import './style.css'

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setInputItems] = useState([]);

    const addItems=()=>{
       if(!inputdata){
         alert("plz fill the data")
       } else{
        const myNewInputData = {
            id:new Date().getTime().toString(),
            name:inputdata
        }
         setInputItems([...items, myNewInputData]);
         setInputData("");
       }
    };

    const deleteItem=(index)=>{
           const updateItem = items.filter((currEle)=>{
             return currEle.id !== index;
           });
           setInputItems(updateItem);
    }

  return (
    <>
    <div className="main-div">
        <div className="child-div">
        <h1>Todo List</h1>
            <figure>
                <img src="./images/todo.svg" alt='todologo'/>
                <figcaption>Add Your List Here 👇</figcaption>
            </figure>
            <div className="add-items">
                <input type='text' 
                placeholder = '✍🏻 Add Items'
                className='form-control'
                value={inputdata}
                onChange={(event)=> (setInputData(event.target.value))}
                
                />
                <i className='fa fa-plus add-btn' onClick={addItems}></i>
            </div>
            {/* show our items */}
             <div className="showItems">
                {
                    items.map((currEle, index) =>{
                        return(
                            <div className="eachItem" key={index}>
                                <h3>{currEle.name}</h3>
                                <div className="todo-btn">
                                <i className='far fa-edit add-btn'></i>
                                <i className='far fa-trash-alt add-btn' onClick={()=> deleteItem(currEle.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
             </div>

            {/* remove all button */}
            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All"><span>Check List</span></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo
