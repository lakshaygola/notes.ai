import api from "../../api"
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import "../../styles/taskCard.css";


export const CreateTaskCard = function (props){
    return(
        <div className="card">
            <div className="card-head-section">
                <p className="card-title capitalize">
                    {props.taskTitle}
                </p>
                <p className="card-id">
                    {props.taskId}
                </p>
            </div>
            <div className="card-description-section">
                <p className="card-description capitalize">
                    {props.taskDescription}
                </p>
            </div>
            <div className="card-btn-section">
                <div className="primary-btn delete-task-btn"
                onClick={() => props.taskDeleteHandler(props.taskId)}>
                    <MdDeleteForever className="delete-task-icon"/>
                </div>
                <div className="secondary-btn edit-task-btn">
                    <FaEdit className="edit-task-icon" />
                </div>
            </div>
        </div>
    );
}


export const TaskCard = function (){
    // Task state to capture todo task
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    // Function to fetch all the task
    const getTasks = async () => {
        try{
            const response = await api.get("api/todo/app/all/todos/")
                .then((response) => response.data)
                .then((data) => setTasks(data))
                .catch((error) => console.log(error));
        }
        catch(error) {
            console.log(error);
            alert(error);
        }
    };

    // Function to delete task
    const deleteTask = async(id) => {
        try{
            const response = await api.get(`api/todo/app/delete/${id}/`)
            .then((response) => {
                if(response.status === 200){
                    alert("Note deleted");
                }else{
                    alert("Failed to delete");
                }
            })
        }
        catch (error) {
            console.log(error);
            alert(error);
        }
        finally{
            getTasks();
        }
    }

    if(tasks.length === 0){
        return <p className="card-tagline"> <i>Add your daily task</i> </p>
    }
    else{
        return (
            <div className="card-container">    
                {tasks.map((task, i) => (
                    <CreateTaskCard 
                        key={i}
                        taskTitle={task.todo_title}
                        taskId={task.todo_id}
                        taskDescription={task.todo_description}
                        taskDeleteHandler={deleteTask}
                    />
                ))}
            </div>
        );
    }
}