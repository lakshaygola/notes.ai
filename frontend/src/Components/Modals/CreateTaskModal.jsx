import { FaCircleXmark } from "react-icons/fa6";
import CreateTaskForm from "../Forms/CreateTaskForm";
import "../../styles/createTaskModal.css";

function CreateTaskModal(props) {
    return (
        <div className="modal-container">
            <div className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="model-heading">
                            Create a new task
                        </h2>
                        <div className="modal-close-icon"
                        onClick={props.toggleModal}>
                            <FaCircleXmark className="close-icon"/>
                        </div>
                    </div>
                    <div className="modal-form">
                        <CreateTaskForm 
                            toggleModal={props.toggleModal}
                            route={props.route}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTaskModal;