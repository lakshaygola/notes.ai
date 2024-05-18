import api from "../../api";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormChangePasswordContainer = styled.div`
`;

const FormChangePassword = styled.form`
`;

const FormChangePasswordHeaderContainer = styled.div``;

const FormChangePasswordHeader = styled.h1`
`;

const FormChangePasswordInputContainer = styled.div``;

const FormChangePasswordInput = styled.input`
`;

const FormChangePasswordButton = styled.button``;


function ChangePasswordForm ({route}) {

    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {
            const response = await api.put(route, {
                "old_password": oldPassword, 
                "password": password,
                "confirm_password": confirmPassword
            });
            navigate('/login');
        }
        catch (error) {
            alert(error);
        }
    };

    return (
        <FormChangePasswordContainer>
            <FormChangePassword 
            onSubmit={ handleChangePassword }
            className="form-change-password">
                <FormChangePasswordHeaderContainer
                className="change-password-header-container">
                    <FormChangePasswordHeader
                    className="form-change-header">
                        Change Password
                    </FormChangePasswordHeader>
                </FormChangePasswordHeaderContainer>
                <FormChangePasswordInputContainer
                className="change-password-input-container">
                    <FormChangePasswordInput 
                    className="old-password-input"
                    type="password"
                    value={oldPassword}
                    placeholder="Old Password"
                    onChange={(e) => setOldPassword(e.target.value)}
                    />
                    <FormChangePasswordInput 
                    className="new-password-input"
                    type="password"
                    value={password}
                    placeholder="New Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormChangePasswordInput 
                    className="new-confirm-password-input"
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </FormChangePasswordInputContainer>
                <FormChangePasswordButton
                type="submit"
                className="change-password-btn">
                    Submit
                </FormChangePasswordButton>
            </FormChangePassword>
        </FormChangePasswordContainer>
    );
}

export default ChangePasswordForm;