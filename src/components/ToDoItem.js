import React from 'react'

export const ToDoItem = (props) => {
  return (
    <div onClick={()=>{
      props.deleteItem(props.id)
    }}>
      <li>{props.text}</li>
    </div>
    
  )
}
