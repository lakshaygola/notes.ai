import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const PlusIconBtn = styled.button`
    border: 5px solid #F4CE14;
    border-radius: 50%;
    width: 50px;
    height:50px;
    background-color: transparent;
    position: fixed;
    bottom: 20px;
    right: 20px;
    transition: all 0.2s ease-out;
    color: #F4CE14;
    font-size: 20px;

    &: hover{
        background-color: #F4CE14;
        color: white;
    }
`;

export const PlusIcon = function () {
    return (
        <PlusIconBtn>
            <FaPlus/>
        </PlusIconBtn>
    );
}