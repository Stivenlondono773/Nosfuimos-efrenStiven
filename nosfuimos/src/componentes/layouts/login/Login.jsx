import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");
  let redirecion = useNavigate();

  let inicioSesion = () => {
    if (getPassword === "1234" && getUsername === "stiven") {
      console.log("bien");
      redirecion("/pagina");
    } else {
      console.log("mal");
    }
  };

  return (
    <div className="contenedor1">
      <div className="contenedor2">
        <div className="contenedorformulario">
          <h3>INICIAR SESION</h3>
          
          <input 
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Nombre Usuario"
          />
          
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Contraseña"
          />
          <button onClick={inicioSesion}> INGRESAR</button>
          <button className="botonderegistrar" onClick={() => redirecion("/registros")}>CREAR CUENTA</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
