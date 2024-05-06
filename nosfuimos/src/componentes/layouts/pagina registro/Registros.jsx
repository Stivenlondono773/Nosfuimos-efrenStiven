import React from "react";
import "./Registro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
let apiusurios = "http://localhost:5173/registros"

const Registros = () => {
  let redirecion = useNavigate();
  const [getUsername, setUsername] = useState("");
  const [getPassword, setPassword] = useState("");

  function guardarRegistros(){


  }

  return (
    <div className="contenedorregi">
      <div className="contenedorregi1">
        <div className="contenedorregi3">
          <h3>FORMULARIO</h3>
         
          <input className="inputregi" type="text" placeholder="Nombre Usuario" />
         
          <input className="inputreg" type="text" placeholder="Email" />
        
          <input className="inputreg" type="Password" placeholder="Crear Contraseña" />

          <input className="inputreg" type="Password" placeholder="Confirmar Contraseña" />

       
          <input className="inputreg" type="text" placeholder="Digite Lugar de Destino" />
      

          <button className="btregi" onClick={() => redirecion("/pagina")}>Registrar</button>
        </div>
      </div>
    </div>
  );
};

export default Registros;
