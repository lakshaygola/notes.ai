import api from "../../api"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/createTaskForm.css";

function CreateTaskForm(props) {

    const [taskTitle, setTaskTitle]= useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const navigate = useNavigate();

    const handleTaskSubmit = async (e) => {
        e.preventDefault();
        

        try{
            const response = await api.post(props.route, {
                todo_title: taskTitle,
                todo_description: taskDescription
            });
            if (response.status === 201){
                alert("Task added");
                navigate('/');
                
            }else{
                alert("Task not created");
            }
        }
        catch(error){
            alert(error);
            console.log(error);
        }
        finally{
            navigate("/");
        }
    };

    return (
        <div className="create-task-form-container">
            <form onSubmit={handleTaskSubmit} className="create-task-form">
                <div className="create-form">
                    <input 
                    type="text" 
                    placeholder="Title"
                    value={taskTitle}
                    className="task-title-input form-input"
                    onChange={(e) => setTaskTitle(e.target.value)}
                    />
                    <textarea 
                    type="text" 
                    placeholder="Task Details"
                    value={taskDescription}
                    className="task-description-input form-input"
                    onChange={(e) => setTaskDescription(e.target.value)}
                    />
                    <div className="create-task-btn-container">
                        <div className="create-task-btn primary-btn"
                        onClick={handleTaskSubmit}>
                            Create
                        </div>
                        <div className="cancel-task-btn secondary-btn"
                        onClick={props.toggleModal}>
                            Cancel
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTaskForm