import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { PrincipalExtention } from '../models/PrincipalExtention';

interface IDashboardProps {
  aUser: PrincipalExtention | undefined,
  setAUser: (aUser: PrincipalExtention| undefined) => void
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
      <Button variant="primary" onClick={logout}>Log out</Button>{' '}
      <div > 
      <h1>Welcome, {props.aUser.username}!</h1>
      <h1>id, {props.aUser.id}!</h1>
      <h1>AccountType, {props.aUser.accountType}!</h1>
        </div>
        </div>
    </>
  );
}
