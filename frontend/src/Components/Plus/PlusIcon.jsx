import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import "../../styles/base.css"
import CreateTaskModal from "../Modals/CreateTaskModal";



export const PlusIcon = function () {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    };

    return (
        <>
            <div className="add-task-btn" onClick={toggleModal}>
                <FaPlus className="add-task-icon"/>
            </div>

            {(modal) && (
                <CreateTaskModal 
                    toggleModal={toggleModal}
                    route="api/todo/app/create/"/>
            )}
        </>
    );
}