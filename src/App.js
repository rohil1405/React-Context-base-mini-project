import Navbar from '../../contextapi/src/component/Navbar';
import TodoList from './component/TodoList';
import ThemeContextProvider from './contexts/Themecontext';
import AuthContextProvider from './contexts/Authcontext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
     <div className='ui raised very padded text container segment'>
      <AuthContextProvider>
        <TodoListContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </TodoListContextProvider>
      </AuthContextProvider>
      </div>
      
    </div>
  );
}

export default App;
