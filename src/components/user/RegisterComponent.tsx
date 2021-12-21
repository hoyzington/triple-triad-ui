import { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';

import PrincipalExtension from '../../models/PrincipalExtension';
import { register } from '../../remote/user-service';

interface IRegisterProps {
  aUser: PrincipalExtension | undefined,
  setAUser: (aUser: PrincipalExtension| undefined) => void
}

export function RegisterComponent(props: IRegisterProps) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  let updateFirstName = (e: SyntheticEvent) => {
    setFirstName((e.target as HTMLInputElement).value);
  }

  let updateLastName = (e: SyntheticEvent) => {
    setLastName((e.target as HTMLInputElement).value);
  }

  let updateEmail = (e: SyntheticEvent) => {
    setEmail((e.target as HTMLInputElement).value);
  }

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let regNewUser = async () => {
    // --- test
    // setFirstName ( "aaaa");
    // setLastName ( "aaaa");
    // setEmail ( "aaaa@gmail.com");
    // setUsername ( "aaaa");
    // setPassword ( "a1aaDa#aaa");
    // --- test //

    if (!firstName || !lastName || !email || !username || !password) {
      setErrorMessage('You must provide a username and password!');
      return;
    }

    try {
      let principal = await register({firstName, lastName, email, username, password});
      props.setAUser(principal);
      window.sessionStorage.setItem("user_cached", JSON.stringify(principal));
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    props.aUser ? <Navigate to="/dashboard"/> : 
      <>
        <div >
        <h4>Register your account</h4>
        <input type="text" id="firstName" placeholder="Enter your firstName" onChange={updateFirstName}/>
          <br/><br/>
          <input type="text" id="lastName" placeholder="Enter your lastName" onChange={updateLastName}/>
          <br/><br/>
          <input type="text" id="email" placeholder="Enter your email" onChange={updateEmail}/>
          <br/><br/>
          <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
          <br/><br/>
          <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
          <br/><br/>
          <button id="login-button" onClick={regNewUser}>register</button>
          <br/><br/>
        </div>
      </>
  );

}
