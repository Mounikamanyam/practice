import React from 'react';
import {addTodo} from '../../actions/addTodo';


export let AddTodo=({dispatch})=>{
  let input;
  return(
    <div>
    <input ref={node=>{input=node;}} />
    <button onClick={()=>{
      dispatch(addTodo(input.value));
      input.value='';
    }}>addtodo</button>
    </div>
    )
}