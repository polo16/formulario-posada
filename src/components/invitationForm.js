import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { fs } from 'fs';
import { Collapse } from '@material-ui/core';
import posada from '../assets/86cd5dfe-7f24-4d51-a886-951b28a3d094.png';


const baseURL = "http://localhost:8080/api/saveUser";

const Formulario = () => {
	const [post, setPost] = React.useState(null);
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	const [showForm, setShowForm] = useState(false);

	React.useEffect(() => {
		axios.get(`${baseURL}/1`).then((response) => {
			setPost(response.data);
		});
	}, []);

	function createPost(valores) {
		const uuid = uuidv4();
		// saveQr();
		console.log(uuid);
		console.log(valores.invitados);
		const sumaInvitados = parseInt(valores.invitados) + 1;
		console.log(valores);
		console.log(sumaInvitados);

		axios
			.post(baseURL, {
				nombre: valores.nombre,
				telefono: valores.telefono,
				invitados: valores.invitados,
				confirmacion: 0,
				sucursal: valores.sucursal,
				nota: valores.mensaje,
				id_qr: uuid,
				contador: sumaInvitados
			})
			.then((response) => {
				setPost(response.data);
			});
	}

	function saveQr() {

		// var qr = require('qr-image');

		// var qr_svg = qr.image('I love QR!', { type: 'svg' });
		// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

		// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
		// console.log("desde el saveQr");



		const fs = require('fs');
		const data = "This is the new content of the file.";
		fs.writeFile(`/assets/sfile.svg`, data, (err) => {
			if (err) {
				throw err;
				console.log("Data has been written to file successfully.");
			}
		});
	}


	return (
		<div className='containerForm'>
						
			
			<Formik
				initialValues={{
					nombre: '',
					telefono: '',
					sucursal: '',
					invitados: 0,
					contador: 0

				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if (!valores.nombre) {
						errores.nombre = 'Por favor ingresa un nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion telfono
					if (!valores.telefono) {
						errores.telefono = 'Por favor ingresa un telefono'
					}

					// Validacion sucursal
					if (!valores.sucursal) {
						errores.sucursal = 'Por favor ingresa una sucursal'
					}
					

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					createPost(valores);
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
					setShowForm(false);
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						
						<div>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

						<img className='logopp'  src={posada}/>

							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text"
								id="nombre"
								name="nombre"
								placeholder="John Doe"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Telefono</label>
							<Field
								type="text"
								id="telefono"
								name="telefono"
								placeholder="telefono"
							/>
							<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
						</div>

						<div>
							<Field name="sucursal" as="select" placeholder="Sucursal">
								<option value="LÓPEZ MATEOS"> LÓPEZ MATEOS </option>
								<option value="EJERCITO">EJERCITO</option>
								<option value="SANTA ROSA" >SANTA ROSA </option>
								<option value="BICENTENARIO"> BICENTENARIO</option>
								<option value="VALLES DEL EJIDO"> VILLA UNION</option>
								<option value="VILLA GALAXIA"> VILLA GALAXIA</option>
								<option value="VILLA UNION"> VILLA UNION</option>
								<option value="VILLA UNION2"> VILLA UNION</option>
								<option value="ALARCON"> ALARCON</option>
								<option value="PLAYA SUR"> PLAYA SUR</option>
								<option value="GRAN PLAZA"> GRAN PLAZA</option>
								<option value="GALERIAS" >GALERIAS</option>
								<option value="FOOD TRUCK"> FOOD TRUCK</option>
								<option value="PRADERA DORADA"> PRADERA DORADA</option>
								<option value="CANSECO"> CANSECO</option>
								<option value="MARINA"> MARINA</option>
								<option value="SEMINARIO"> SEMINARIO</option>
								<option value="FLORES MAGON"> FLORES MAGON</option>
								<option value="PLAZA ACAYA"> PLAZA ACAYA</option>
								<option value="KRAKEN"> KRAKEN</option>
								<option value="MAÑANITAS"> MAÑANITAS</option>
								<option value="CERRITOS SABALO">CERRITOS SABALO</option>
								<option value="REAL DEL VALLE">REAL DEL VALLE</option>
								<option value="CLOUTHIER"> CLOUTHIER</option>
								<option value="CENTRO"> CENTRO</option>
								<option value="JUAREZ"> JUAREZ</option>
								<option value="VILLA VERDE"> VILLA VERDE</option>
								<option value="ZONA DORADA"> ZONA DORADA</option>
								<option value="PLAZA CARACOL"> PLAZA CARACOL</option>
								<option value="PLANTA"> PLANTA </option>
							</Field>
							<ErrorMessage name="sucursal" component={() => (<div className="error">{errors.sucursal}</div>)} />
						</div>

						<div>
							<label htmlFor="invitados">Lleva invitados?</label>
							<label>
								<Field type="radio" name="sexo" value="si" onClick={() => setShowForm(true)} /> si
							</label>
							<Collapse in={showForm}>
								<label htmlFor="invitados"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cuantos?</label>
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
								<Field name="invitados" as="select">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								</Field>
							</Collapse>
							<label>
								<Field type="radio" name="sexo" value="0" onClick={() => setShowForm(false)} /> no
							</label>
							
						</div>

						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit" >Enviar</button>
						{formularioEnviado && <p className= "exito">Formulario enviado con exito!</p>}
					</Form>
				)}


				{/* {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
					<form className="formulario" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input 
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe" 
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>

							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<input 
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</form>
				)} */}
			</Formik>
		</div>
	);
}

export default Formulario;