import './App.css';
import { Header } from './Components/Header/Header';
import { PlusIcon } from './Components/Plus/PlusIcon';
import { SubHeading } from './Components/SubHeader/SubHeader';
import { tasks } from './Assets/Tasks';
import { TaskCard } from './Components/TaskCard/TaskCard';


function App() {
  return (
    <>
      <Header />
      { tasks.length === 0 && <SubHeading />}
      <TaskCard />
      <PlusIcon />
    </>
  );
}

export default App;
