import { Routes, Route } from "react-router-dom"
import Home from "./components/home";
import Formulario from './components/invitationForm';
import Invitation from "./components/invitation";
function Aplicacion() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="invitacion" element={ <Invitation /> } />
        <Route path="formulario" element={ <Formulario /> } />
      </Routes>
    </div>
  )
}

export default Aplicacion