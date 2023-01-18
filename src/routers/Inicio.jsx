import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Inicio = () => {
  const { user, signIn, signOut } = useContext(UserContext);
  return (
    <div>
      <h1>Inicio</h1>
      <h2>{user ? "Conectado" : "Desconectado"}</h2>
      {user ? (
        <>
          <button className="btn btn-primary" onClick={signOut}>
            Desconectado
          </button>
          <Link className="btn btn-warning" to="/protegida" >
            Ruta protegida
          </Link>
        </>
      ) : (
        <button className="btn btn-primary" onClick={signIn}>
          Acceder
        </button>
      )}
    </div>
  );
};

export default Inicio;
