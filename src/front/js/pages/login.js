import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const Login = () => {

	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log("this token", store.token )
    const handleClick = async () => {
        await actions.login(email, password);
        navigate("/private")
    };

    if (store.token && store.token != "" && store.token != undefined) navigate("/");
    

	return (
		<><div className="text-center mt-5">
            <h1>Login</h1>
            {store.token && store.token != "" && store.token != undefined ? (<Navigate to ="/" />
            ) : (
                <div>
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleClick}>Login</button>
                </div>
                
            )}
        </div><div>
            <p className="text-center mt-5">Doesn't have an account? <Link to="/register">Sign Up!</Link></p>
            </div></>
	);
};