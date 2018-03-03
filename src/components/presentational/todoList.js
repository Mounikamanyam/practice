import React from 'react';
import {TodoComp} from './todoComp'; 

export const TodoList=({todos,onTodoClick})=>(
	<ul>
	{todos.map(todo=>
       <TodoComp key={todo.id}{...todo} onClick={()=>onTodoClick(todo.id)} />
      )}
	</ul>
)