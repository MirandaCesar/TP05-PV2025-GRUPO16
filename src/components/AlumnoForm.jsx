import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AlumnoForm = ({ alumnos, setAlumnos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = id !== undefined;

  const initialFormState = isEditing
    ? alumnos.find(alumno => alumno.lu === id)
    : { lu: '', nombre: '', apellido: '', curso: '', email: '', domicilio: '', telefono: '' };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setAlumnos(alumnos.map(alumno => (alumno.lu === id ? formData : alumno)));
    } else {
      setAlumnos([...alumnos, formData]);
    }
    navigate('/alumnos');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="lu" value={formData.lu} onChange={handleChange} placeholder="LU" required />
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Apellido" required />
      <input type="text" name="curso" value={formData.curso} onChange={handleChange} placeholder="Curso" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="domicilio" value={formData.domicilio} onChange={handleChange} placeholder="Domicilio" required />
      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required />
      <button type="submit">{isEditing ? 'Actualizar Alumno' : 'Agregar Alumno'}</button>
    </form>
  );
};

export default AlumnoForm;

