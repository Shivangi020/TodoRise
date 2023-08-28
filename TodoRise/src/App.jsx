import { AddTask } from "./Components/AddTask";
import Header from "./Components/Header";
import { ProgressTask } from "./Components/ProgressTask";
import { TodoList } from "./Components/TodoList";
import DoneTask from "./Components/DoneTask";
import Footer from "./Components/Footer";

function App() {
  return (
    <main>
      <div className="header">
        <Header />
      </div>
      <div className="addTask">
        <AddTask />
      </div>
      <div className="Lists">
        <TodoList />
        <ProgressTask />
        <DoneTask />
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </main>
  );
}

export default App;
