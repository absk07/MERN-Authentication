import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/action'

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <>
            <h1>Profile Page</h1>
            <h2>{userInfo?.email}</h2>
            <button onClick={logoutHandler}>Logout</button>
        </>
    );
}

export default Profile;