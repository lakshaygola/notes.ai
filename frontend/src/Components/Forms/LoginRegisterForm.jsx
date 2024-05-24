import api from "../../api";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFERSH_TOKEN } from "../../constants";
import "../../styles/base.css";
import "../../styles/form.css"
import Header from "../Header/Header";



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
        <div className="login-register-container">
            <Header />
            <div className="left-container">
                <div className="left-container-headers">
                    <h2 className="welcome-header">Welcome to NotesAI.</h2>
                    <h2 className="tag-line">Think it. <i>Make it.</i></h2>
                </div>
            </div>

            <div className="right-container">
                <div className={"form-header " + ((name === "Register") && "register-margin")}>
                    {(name === "Login") && (<h3 className="login-register-greeting-msg">{name} to NotesAI account.</h3>)}
                    {(name === "Register") && (<h3 className="login-register-greeting-msg">Create new NotesAI account.</h3>)}
                </div>

                <form
                    onSubmit={handleLoginRegisterSubmit} 
                    className="login-register-form">

                    {(name === "Register") && (<input 
                        className="login-resgister-form-input email-input"
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />)}
                    <input
                        className="login-resgister-form-input username-input"
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {(name === "Register") && (<div className="form-name-container">
                        <input 
                            className="login-resgister-form-input first-name-input"
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input 
                            className="login-resgister-form-input last-name-input"
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>)}
                    {(name === "Register") && (<div className="form-password-container">
                        <input
                            className="login-resgister-form-input password-register-input"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            className="login-resgister-form-input confirm-password-input"
                            type="password"
                            value={confirmPassword}
                            placeholder="ConfirmPassword"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>)}
                    {(name === "Login") && (<input
                        className="login-resgister-form-input password-input"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />)}
                    <div className="form-btn-container">
                        <button 
                        type="submit"
                        className="login-resgister-submit-btn primary-btn">
                            {name}
                        </button>
                        <button 
                        type="reset"
                        className="secondary-btn login-register-reset-btn">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginRegisterForm;