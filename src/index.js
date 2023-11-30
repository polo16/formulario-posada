import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Aplicacion from './Aplicacion';

// ReactDOM.render(
// 	<React.StrictMode>
// 		<div className="contenedor">
// 			<Formulario />
// 		</div>
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<BrowserRouter>
	 	<Aplicacion />
	</BrowserRouter>,
	document.getElementById('root')
  );