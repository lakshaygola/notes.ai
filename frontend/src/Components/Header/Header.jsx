import styled from "styled-components";

const HeaderDiv = styled.div`
    margin: 0;
    padding: 10px;
    background-color: #F4CE14;
    display: flex;
    justify-content: space-between;
`;

const HeaderH1 = styled.h1`
    margin: 0;
    width: 100%;
    height: 100%;
    color: #495E57
`;

const HeaderBtn = styled.button`
    background-color: #495E57;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
`;

export const Header = function () {
    return (
        <HeaderDiv className="header">
            <HeaderH1 className="header-heading">Keeper App</HeaderH1>
            <HeaderBtn>Login</HeaderBtn>
        </HeaderDiv>
    );
}