import React, { useState } from 'react'
import InputArea from './components/inputArea';
import { ToDoItem } from './components/ToDoItem';
function App() {
  const [items,setItems]=useState([]);
  const addItems =(inputItems)=>{
    if(!(inputItems==="")){
    setItems((previousItems)=>{
      return [...previousItems,inputItems]
    });
  }
  };
  const deleteItem=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index !==id;
      });
    });
  }
  console.log(items);
  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <InputArea addItems={addItems}></InputArea>
      <div>
        <ul>
          {items.map((item,index)=>{
            return <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index}/>
          })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
