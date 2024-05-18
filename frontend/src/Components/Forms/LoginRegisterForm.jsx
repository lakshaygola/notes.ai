import api from "../../api";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ACCESS_TOKEN, REFERSH_TOKEN } from "../../constants";


// Styled components

const LoginRegisterFormElement = styled.form`
    border: 1px solid green;
    margin: auto;
    max-width: 40%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const LoginResisterFormHeader = styled.h1`
    text-align: center;
    font-size: 40px;
    font-weight: 600;

`;

const LoginResisterFormInput = styled.input`
    min-height: 5vh;
    min-width: 60%;
    padding: 10px;
    border-radius: 10px;
    border: 1.2px solid;
`;

const LoginResgisterFormButton = styled.button`
    padding: 10px;
    background-color: transparent;
    border: 1px solid;
    border-radius: 10px;
    font-size: 17px;
`;



function LoginRegisterForm({route, method}) {
    // Login and registration form for the user

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const name = method === 'login' ? 'Login': 'Register';

    const handleLoginRegisterSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
    
        try{
            if (name === 'Register') {
                // When user want to register themselves
                
                const response = await api.post(route, {
                    "email": email, 
                    "username": username, 
                    "first_name": firstName,
                    "last_name": lastName,
                    "password": password, 
                    "confirm_password": confirmPassword
                });
                    navigate('/login');
                }
            else {
                // When user want to login

                const response = await api.post(route, {username, password});
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                localStorage.setItem(REFERSH_TOKEN, response.data.refersh);
                navigate('/');
            }
        }
        catch(error){
            alert(error);
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <LoginRegisterFormElement
            onSubmit={handleLoginRegisterSubmit} 
            className="login-register-form">
            
            <LoginResisterFormHeader className="login-register-form-heading">
                {name}
            </LoginResisterFormHeader>
            
            {(name === "Register") && (<LoginResisterFormInput 
                className="login-resgister-form-input email-input"
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />)}
            <LoginResisterFormInput
                className="login-resgister-form-input username-input"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
            />
            {(name === "Register") && (<LoginResisterFormInput 
                className="login-resgister-form-input first-name-input"
                type="text"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                />)}
            {(name === "Register") && (<LoginResisterFormInput 
                className="login-resgister-form-input last-name-input"
                type="text"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                />)}
            <LoginResisterFormInput
                className="login-resgister-form-input password-input"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            {(name === "Register") && (<LoginResisterFormInput 
                className="login-resgister-form-input confirm-password-input"
                type="password"
                value={confirmPassword}
                placeholder="ConfirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                />)}
            <LoginResgisterFormButton 
                type="submit"
                className="login-resgister-submit-btn">
                {name}
            </LoginResgisterFormButton>
        </LoginRegisterFormElement>
    )
}

export default LoginRegisterForm;