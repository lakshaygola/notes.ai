import LoginRegisterForm from "../Forms/LoginRegisterForm";


function Login() {
    return (
        <LoginRegisterForm 
            route="api/user/login/"
            method="login"
        />
    );
}


export default Login;