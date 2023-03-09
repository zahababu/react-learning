import Backdrop from "./components/backdrop";
import Modal from "./components/modal";
import Todo from "./components/todo";


function App() {
  return (
    <div className="App">
      <h1>todolist</h1>
      <Todo text='abe ja na'></Todo>
      <Todo text='ahi jata'></Todo>
      <Todo text='ukhar le '></Todo>
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
