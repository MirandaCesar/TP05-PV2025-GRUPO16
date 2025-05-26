import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ListaAlumnos from './pages/ListaAlumnos';
import NuevoAlumno  from './pages/NuevoAlumno';
import AcercaDe     from './pages/AcercaDe';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/"             element={<Home         />} />
          <Route path="/ListaAlumnos" element={<ListaAlumnos />} />
          <Route path="/NuevoAlumno"  element={<NuevoAlumno  />} />
          <Route path="/AcercaDe"     element={<AcercaDe     />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
