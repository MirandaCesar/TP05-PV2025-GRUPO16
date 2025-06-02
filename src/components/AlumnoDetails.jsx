import { useParams } from 'react-router-dom';

function AlumnoDetails({alumnos}) {
  const { id } = useParams();
  const alumno = alumnos.find(a => a.lu === id);

  if (!alumno) return <p>Alumno no encontrado.</p>;

  return (
    <div>
      <h2>Detalle del Alumno</h2>
      <ul>
        {Object.entries(alumno).map(([key, val]) => (
          <li key={key}><strong>{key}:</strong> {String(val)}</li>
        ))}
      </ul>
    </div>
  );
}

export default AlumnoDetails;