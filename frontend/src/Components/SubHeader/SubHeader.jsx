import styled from "styled-components";

const SubHeadeing = styled.p`
    color: grey;
    font-size: 20px;
    text-align: center;
    font-style: italic;
`;

export const SubHeading = function () {
    return (
        <SubHeadeing>
            Add your daily task here
        </SubHeadeing>
    );
}