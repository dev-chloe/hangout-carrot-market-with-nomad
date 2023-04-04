import { useState } from "react"

export default function Forms() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");

  const onUserNameChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = event;
    setUserName(value);
  }
  const onEmailChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = event;
    setEmailErrors("");
    setEmail(value);
  }
  const onPasswordChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = event;
    setPassword(value);
  }
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(userName === "" || email === "" || password === "") {
      setFormErrors("All fields are required");
    }
    if(!email.includes("@")) {
      setEmailErrors("email is rquired")
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <input 
        value={userName} 
        onChange={onUserNameChange} 
        type="text" 
        placeholder="Username"  
        required
        minLength={2}
      />
      <input 
        value={email} 
        onChange={onEmailChange} 
        type="email" 
        placeholder="Email"  
        required
      />
      {emailErrors}
      <input 
        value={password} 
        onChange={onPasswordChange} 
        type="password" 
        placeholder="Password"  
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}