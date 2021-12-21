import { Navigate } from 'react-router-dom';
import PrincipalExtension from "./../models/PrincipalExtension";

interface IDashboardProps {
  aUser: PrincipalExtension | undefined,
  setAUser: (aUser: PrincipalExtension| undefined) => void
}

export function Dashboard(props: IDashboardProps) {
  if(!props.aUser){
    const stored =  window.sessionStorage.getItem("user_cached");
    if (stored) {
      props.setAUser(JSON.parse(stored));
      console.log(props.aUser);
  }
}

let logout = () => {
  window.sessionStorage.setItem("user_cached", "");
  window.location.reload();
}

return (
  !props.aUser ? <Navigate to="/login"/> :
    <>
      <div>
        <h2>dashboard...</h2>
        <button type="button" onClick={logout}>Log out</button>{' '}
        <div > 
          <h1>Welcome, {props.aUser.username}!</h1>
          <h1>id, {props.aUser.id}!</h1>
          <h1>AccountType, {props.aUser.accountType}!</h1>
        </div>
      </div>
    </>
  );
}
