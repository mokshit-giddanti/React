import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Input } from "@mui/material";
import './register.css';
import {registerUser} from "../backend/api"
const Register = () => {
    const history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const register = async () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            try {
                const response = await registerUser(user);
                alert(response.message);
                history.push("/login");
            } catch (error) {
                console.error(error);
                alert("Error registering user. Please try again.");
            }
        } else {
            alert("Invalid input");
        }
    };

    return (
        <div>
            <div className="register">
                <h1>REGISTER FOR PMS</h1>
                <Input type="text" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></Input><br/><br/>
                <Input type="text" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></Input><br/><br/>
                <Input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></Input><br/><br/>
                <Input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></Input><br/><br/>
                <Button variant="contained" className="button" onClick={register}>Register</Button>
                <div>OR</div>
                <Button variant="contained" className="button" onClick={() => history.push("/login")}>Login</Button>
            </div>
        </div>
    );
};

export default Register;
