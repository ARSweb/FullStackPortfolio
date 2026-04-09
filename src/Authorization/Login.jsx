import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigator = useNavigate();

    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    const submit = async (e) => {
        e.preventDefault();
        setError("")
        try{
            const response = await api.post("/auth/login", {
                login, password,
            })

            localStorage.setItem("tokenFSP", response.data.token)
            window.location.href = "/admin"
        }catch(err){
            if(err.response && err.response.data?.message){
                setError(err.response.data.message)
            }else{
                setError("Login yoki Parol noto'g'ri")
            }
        }
    }
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition">
      
      <button
        onClick={() => setDark(!dark)}
        className="mb-4 px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded"
      >
        Toggle Mode
      </button>

      <h1 className="text-2xl text-black dark:text-white">
        {dark ? "Dark 🌙" : "Light ☀️"}
      </h1>
    </div>
  )
}

export default Login
