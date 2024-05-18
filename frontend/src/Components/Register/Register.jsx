import LoginRegisterForm from "../Forms/LoginRegisterForm";


function Register(){
    return (
        <LoginRegisterForm 
            route="api/user/register/"
            method="register"
        />
    );
}


export default Register;