import React,{useEffect, useState} from 'react'
import './style.css'

     // local storage data back
     const getLocaData=()=>{
        const lists = localStorage.getItem("mytodolist");
          if(lists){
            return JSON.parse(lists);
          }
          else{
            return[];
          }
      };

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setInputItems] = useState(getLocaData());
    const [isEditItem, setIsEditItem]= useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItems=()=>{
       if(!inputdata){
         alert("plz fill the data")
       }
       else if(inputdata && toggleButton){
         setInputItems(
           items.map((currEle)=>{
            if(currEle.id === isEditItem){
                return{...currEle, name: inputdata};
            }
            return currEle;
           })

         ); 
        setInputData([])
        setIsEditItem(null);
        setToggleButton(false);
       }
        else{
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
    };

    // edit items 
    const editItem=(index)=>{
        const item_todo_edited = items.find((currEle)=>{
            return currEle.id === index;
        });
        setInputData(item_todo_edited.name)
        setIsEditItem(index);
        setToggleButton(true);
     }
    // remov all elememts

    const removeAll=()=>{
       setInputItems([]);
    };

    // adding local storage
       useEffect(()=>{
         localStorage.setItem("mytodolist", JSON.stringify(items))
       }, [items]);


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
                {
                    toggleButton ? (<i className='far fa-edit add-btn' onClick={addItems}></i>) : (<i className='fa fa-plus add-btn' onClick={addItems}></i>) 
                }
               
            </div>
            {/* show our items */}
             <div className="showItems">
                {
                    items.map((currEle, index) =>{
                        return(
                            <div className="eachItem" key={index}>
                                <h3>{currEle.name}</h3>
                                <div className="todo-btn">
                                <i className='far fa-edit add-btn' onClick={()=> editItem(currEle.id)}></i>
                                <i className='far fa-trash-alt add-btn' onClick={()=> deleteItem(currEle.id)}></i>
                                </div>
                            </div>
                        )
                    })
                }
             </div>

            {/* remove all button */}
            <div className="showItems">
                <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Todo
