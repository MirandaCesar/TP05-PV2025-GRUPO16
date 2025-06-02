import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AlumnosList = ({ alumnos, setAlumnos }) => {
  const navigate = useNavigate();

  const handleDelete = (lu) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      setAlumnos(alumnos.filter(alumno => alumno.lu !== lu));
    }
  };

  return (
    <div>
      <h3>Lista de Alumnos</h3>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.lu}>
            {alumno.nombre} {alumno.apellido}
            <button onClick={() => navigate(`/alumnos/${alumno.lu}/editar`)}>Editar</button>
            <button onClick={() => handleDelete(alumno.lu)}>Eliminar</button>
            <button onClick={() => navigate(`/alumnos/${alumno.lu}`)}>Ver Detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlumnosList;
