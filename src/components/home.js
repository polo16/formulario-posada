
import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom";


function Home() {
    return (
      <div>
        <h1>Esta es la página de inicio</h1>
        <p></p>
        <Link to="invitacion">Haz clic para ver la página de invitacion</Link>
      </div>
    );
  }
  
  export default Home;