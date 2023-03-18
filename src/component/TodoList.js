import React , { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/Themecontext';
import TodoListContextProvider, { TodoListContext } from '../contexts/TodoListContext';

// CLASS BASE COMPONENT

// class TodoList extends React.Component{

//     static contextType = ThemeContext;

//     render(){

//         const { isDarkTheme, darkTheme, lightTheme, changeTheme } = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;

//         return(
//             <div style={{ 
//                 background:theme.background,
//                 color: theme.text,
//                 height: '140px',
//                 textAlign: 'center'
//              }}>
//                 <p className='item'>Plan the family trip</p>
//                 <p className='item'>Go for shop</p>
//                 <p className='item'>Go for a walk</p>
//                 <button className='ui button primary' onClick={changeTheme}>Change the theme </button>
//             </div>
//         )
//     }
// }

// FUNCTION BASED COMPONENT(HOOK)

const TodoList=() => {

    const [ todo, setTodo ] = useState('');
    const { todos, dispatch } = useContext(TodoListContext);
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', text: todo });
    };

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        dispatch({ type: 'REMOVE_TODO', id: id });
    };

    return (
        <div style={{ 
            background:theme.background,
            color: theme.text,
            textAlign: 'center'
         }}>

            {todos.length ? (
                todos.map((todo) => {
                    return <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className='item'>{todo.text}</p>
                })
            ) : ( 
                <div>You have no todos</div>
            ) 
            }

            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add todo:</label>
                <input type='text' id='todo' onChange={handleChange}/>
                <input type='submit' value='Add new todo' className='ui button primary'/>
            </form>

            {/* <p className='item'>Plan the family trip</p>
            <p className='item'>Go for shop</p>
            <p className='item'>Go for a walk</p> */}
            <button className='ui button primary' onClick={changeTheme}>Change the theme </button>
        </div> 
    )
}

export default TodoList;

