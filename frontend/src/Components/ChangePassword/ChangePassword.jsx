import ChangePasswordForm from "../Forms/ChangePasswordForm";


function ChangePassword(){
    return (
        <ChangePasswordForm 
            route="api/user/change/password/"
        />
    );
}

export default ChangePassword;