import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { PrincipalExtention } from '../../models/PrincipalExtention';
import { authenticate } from "../../remote/auth-service";

// interface ILoginProps {
//     currentUser: Principal | undefined,
//     setCurrentUser: (nextUser: Principal| undefined) => void
// }
interface ILoginProps {
    aUser: PrincipalExtention | undefined,
    setAUser: (aUser: PrincipalExtention| undefined) => void
}

export function LoginComponent(props: ILoginProps) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const stored =  window.sessionStorage.getItem("user_cached");
    if (stored) {
        props.setAUser(JSON.parse(stored));
        console.log(props.aUser);
    }

    let updateUsername = (e: SyntheticEvent) => {
        setUsername((e.target as HTMLInputElement).value);
    }

    let updatePassword = (e: SyntheticEvent) => {
        setPassword((e.target as HTMLInputElement).value);
    }

    let login = async () => {
        if (!username || !password) {
            setErrorMessage('You must provide a username and password!');
            return;
        }

        try {
            let principal = await authenticate({username, password});
            props.setAUser(principal);
            window.sessionStorage.setItem("user_cached", JSON.stringify(principal));
        } catch (e: any) {
            setErrorMessage(e.message);
        }
    }

    return (
        
        props.aUser ? <Navigate to="/dashboard"/> : 
        <>
        <div>
                <h2>Log in to your account</h2>
                <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
                <br/><br/>
                <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
                <br/><br/>
                <button id="login-button" onClick={login}>Login</button>
                <br/><br/>
                </div>
        </>
    );
}