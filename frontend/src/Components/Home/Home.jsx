import { Header } from '../Header/Header';
import { PlusIcon } from '../Plus/PlusIcon';
import { TaskCard } from '../TaskCard/TaskCard';

function Home() {
    return (
        <>
            <Header/>
            <TaskCard />
            <PlusIcon />
        </>
    );
}

export default Home;