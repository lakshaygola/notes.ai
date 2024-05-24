import CreateTaskForm from "../Forms/CreateTaskForm"

function CreateTask () {
    return (
        <CreateTaskForm 
            route = "/api/todo/app/create/"
        />
    );
}

export default CreateTask;