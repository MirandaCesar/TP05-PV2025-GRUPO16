import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AcercaDe     from './pages/AcercaDe';
import { useState } from 'react';

import AlumnosList from './components/AlumnosList'
import AlumnoForm from './components/AlumnoForm';
import AlumnoDetails from './components/AlumnoDetails';

const App = () => {
  const [alumnos, setAlumnos] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"                   element={<Home                                                    />} />
        <Route path="/alumnos"            element={<AlumnosList   alumnos={alumnos} setAlumnos={setAlumnos} />} />
        <Route path="/alumnos/nuevo"      element={<AlumnoForm    alumnos={alumnos} setAlumnos={setAlumnos} />} />
        <Route path="/alumnos/:id/editar" element={<AlumnoForm    alumnos={alumnos} setAlumnos={setAlumnos} />} />
        <Route path="/alumnos/:id"        element={<AlumnoDetails alumnos={alumnos}                         />} />
        <Route path="/acerca"             element={<AcercaDe/>}                                                 />
      </Routes>
    </Router>
  );
};

export default App;
