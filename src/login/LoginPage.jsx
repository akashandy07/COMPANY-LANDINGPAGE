import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function loginformhandler(e) {
        e.preventDefault();

        setTimeout(() => {
            if (email === "demo123@gmail.com" && password === "demo") {
                localStorage.setItem("user", email);
                navigate("/");
            } else {
                alert("Invalid Credentials");
            }
        }, 2000);
    }


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={loginformhandler}>
                <h2>Login</h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

                <p>Email: demo123@gmail.com</p>
                <p>Password: demo</p>
            </form>
        </div>
    );
}
export default LoginPage;