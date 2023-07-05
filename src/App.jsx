import { useState } from 'react';
import  './styles.css';


function App( ) {
  const [isCompletedScreen, setIsCompletedScreen] = useState (false);
  const [ allTodos, setTodos]=useState([ ]);
const [ newTitle, setNewTitle]= useState('');
const[ newDescription, setNewDescription]= useState('');

//adding item button handler
 const handleAddTodo= ( )=>{
let newTodoItem= {
  title: newTitle,
  description: newDescription
}
let updatedArr= [...allTodos];
updatedArr.push(newTodoItem);
setTodos( updatedArr);
 }

  return (
<div className="App">
  <h1>My Todos</h1>
  <div className="todo-wrapper">
  <div className="todo-input-item">
      <label>Title</label>
      <input value={newTitle}  onChange={(e)=>{ setNewTitle(e.target.value)}} placeholder='write task' type='text' ></input>
    </div>

    <div className="todo-input-item">
      <label>Description</label>
      <input value={newDescription}  onChange={(e)=>{setNewDescription(e.target.value)}} placeholder='write what to do' type='text' ></input>
    </div>

    <div className="todo-input-item">
      <button onClick={handleAddTodo} type='button' className='primary-btn'>Add</button>
    </div>
  </div>
  <div className="btn-area">
    <button   className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
    onClick={( ) => setIsCompletedScreen (false)}
          >Todo</button>
    <button  className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
    onClick={( ) => setIsCompletedScreen (true)}
           >Completed</button>
  </div>
  <div className="to-list">
    <div className="todo-list-item">
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</div>
  )
}

export default App
