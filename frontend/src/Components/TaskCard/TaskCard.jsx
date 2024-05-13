import axios from "axios";
import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const TaskCardContainer = styled.div`
    max-width: 90vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    gap: 9%;
    flex-wrap: wrap;
`;

const TaskCardDiv = styled.div`
    width: 27%;
    max-width: 27%;
    height: 42vh;
    max-height: 42vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-block: 20px;
    box-shadow: #F4CE14 0px 2px 8px 0px;
    border-radius: 10px;
`;

const TaskHeaderDiv = styled.div`
    height: 18%;
    max-height: 18%;
    padding-inline: 10px;
    margin-top: 10px;
    overflow: scroll;
    word-wrap: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`;

const TaskCardH1 = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-weight: 620;
`;

const TaskId = styled.p`
    display: none;
`;

const TaskCardDescriptionDiv = styled.div`
    height: 50%;
    display: flex;
    overflow: scroll;

    &::-webkit-scrollbar{
        display: none;
    }
`;

const TaskCardP = styled.p`
    padding: 13px;
    font-size: 1.06rem;
`;

const TaskCardBtnDiv = styled.div`
    height: 20%;
    max-height: 20%;
    display: flex;
    justify-content: space-around;
    padding-block: 5px;
`;

const TaskDeleteBtn = styled.button`
    width: 30%;
    max-width: 30%;
    border: 2px solid #495E57;
    background-color: transparent;
    border-radius: 5px;
    font-size: 30px;
    transition: all 0.3s ease-out;
    color: #495E57;

    &:hover{
        color: #F4CE14;
        cursor: pointer;
        border: 2px solid #F4CE14;
    }
`;

const TaskEditBtn = styled.button`
    width: 30%;
    max-width: 30%;
    border: 2px solid #495E57;
    background-color: transparent;
    border-radius: 5px;
    font-size: 25px;
    transition: all 0.3s ease-out;
    color: #495E57;

    &:hover{
        color: #F4CE14;
        cursor: pointer;
        border: 2px solid #F4CE14;
    }
`;

const SubHeading = styled.p`
    color: grey;
    font-size: 20px;
    text-align: center;
    font-style: italic;
`;

export const CreateTaskCard = function (props){
    return(
        <TaskCardDiv>
            <TaskHeaderDiv>
                <TaskCardH1>{props.taskTitle}</TaskCardH1>
                <TaskId>{props.taskId}</TaskId>
            </TaskHeaderDiv>
            <TaskCardDescriptionDiv>
                <TaskCardP>{props.taskDescription}</TaskCardP>
            </TaskCardDescriptionDiv>
            <TaskCardBtnDiv>
                <TaskDeleteBtn><MdDeleteForever onClick={() => props.taskDeleteHandler(props.taskId)}/></TaskDeleteBtn>
                <TaskEditBtn><FaEdit /></TaskEditBtn>
            </TaskCardBtnDiv>
        </TaskCardDiv>
    );
}


export const TaskCard = function (){
    const [tasks, setTasks] = useState([]);

    function deleteTask(task_id){
        axios.post("http://localhost:8000/task/delete-task", {
            "task_id": task_id,
        }, 
        {
            headers: {
                "Authorization": "OH4H9CSAT0W",
            }
        })
        .then((response) => {
            console.log(response);
            setTasks(response.data.data.tasks);
        })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/task/all-task", {
            headers: {
                "Authorization": "OH4H9CSAT0W",
            }
        })
        .then((response) => {
            console.log(response);
            setTasks(response.data.tasks);
        })
        .catch((error) => console.log(error));
    }, []);

    if(tasks.length === 0){
        return <SubHeading> Add your daily task </SubHeading>
    }
    else{
        return (
            <TaskCardContainer>    
                {tasks.map((task, i) => (
                    <CreateTaskCard 
                        key={i}
                        taskTitle={task.task_title}
                        taskId={task.task_id}
                        taskDescription={task.task_description}
                        taskDeleteHandler={deleteTask}
                    />
                ))}
            </TaskCardContainer>
        );
    }
}