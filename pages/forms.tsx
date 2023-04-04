import { useForm } from "react-hook-form"

export default function Forms() {
  const {register, watch} = useForm();
  return (
    <form>
      <input 
        {...register("username")}
        type="text" 
        placeholder="Username"  
        required
        minLength={2}
      />
      <input 
        {...register("email")}
        type="email" 
        placeholder="Email"  
        required
      />
      <input 
        {...register("password")}
        type="password" 
        placeholder="Password"  
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  )
}