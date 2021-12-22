import { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import User from "../../models/User";
import { register } from '../../remote/user-service';
import { getUserFromSession } from '../../remote/user-service';

interface IRegisterProps {
  aUser: User | undefined,
  setAUser: (aUser: User| undefined) => void
}

export function RegisterComponent() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [matchingPassword, setMatchingPassword] = useState('');

  const stored =  window.sessionStorage.getItem("user_cached");

  let updateUsername = (e: SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  }

  let updatePassword = (e: SyntheticEvent) => {
    setPassword((e.target as HTMLInputElement).value);
  }

  let updateMatchingPassword = (e: SyntheticEvent) => {
    setMatchingPassword((e.target as HTMLInputElement).value);
  }

  let regNewUser = async () => {
    // --- test
    // setUsername ( "aaaa");
    // setPassword ( "a1aaDa#aaa");
    // setMatchingPassword ( "a1aaDa#aaa");
    // --- test //

    if (!username || !password || !matchingPassword) {
      setErrorMessage('You must provide a username and password!');
      return;
    }

    if(password != matchingPassword){
      setErrorMessage('You must enter a matching password');
      return;
    }

    try {
      let principal = await register({username, password, matchingPassword});
      window.sessionStorage.setItem("user_cached", JSON.stringify(principal));
      let storedUser  =  getUserFromSession ();
      if (storedUser ){
        window.location.reload();
      }
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    stored ? <Navigate to="/dashboard"/> : 
      <>
        <div >
        <h4>Register your account</h4>
          <input type="text" id="username" placeholder="Enter your username" onChange={updateUsername}/>
          <br/><br/>
          <input type="password" id="password" placeholder="Enter your password" onChange={updatePassword}/>
          <br/><br/>
          <input type="password" id="matchingPassword" placeholder="Renter your password" onChange={updateMatchingPassword}/>
          <br/><br/>
          <button id="login-button" onClick={regNewUser}>register</button>
          <br/><br/>
        </div>
      </>
  );

}
