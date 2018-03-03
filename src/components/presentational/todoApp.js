
import React from 'react';
import {VisibilityTodoList} from '../container/visibleTodoList';
import {AddTodo} from '../container/addTodo';
import {Footer} from './footer';

export const TodoApp=({filter})=>(
   <div>
   <AddTodo />
   <VisibilityTodoList filter={filter||'all'}/>
   <Footer />
   </div>
);

