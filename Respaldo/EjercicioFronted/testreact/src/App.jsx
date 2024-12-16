import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState({
    usuarios: [],
    cargando: true,
    error: null,
  });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        // Simulamos una llamada a una API con una promesa
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            // Simulamos un error de red de manera dinámica
            const errorSimulado = false;
            if (errorSimulado) {
              reject('Error al obtener los datos');
            } else {
              resolve([
                { id: 1, nombre: 'Juan Pérez', edad: 25 },
                { id: 2, nombre: 'Ana Gómez', edad: 30 },
                { id: 3, nombre: 'Carlos Martínez', edad: 28 },
                { id: 4, nombre: 'Francisco Bravo', edad: 32 },
                { id: 5, nombre: 'Juana Becerra', edad: 70 },
                { id: 6, nombre: 'Manuel Bravo', edad: 70 },
              ]);
            }
          }, 1000);
        });

        // Validación de los datos recibidos
        if (Array.isArray(response)) {
          setState({
            usuarios: response,
            cargando: false,
            error: null,
          });
        } else {
          throw new Error('Los datos no son válidos');
        }
      } catch (err) {
        setState({
          usuarios: [],
          cargando: false,
          error: err.message || 'Error desconocido',
        });
      }
    };

    fetchUsuarios(); // Llamar a la función para obtener los datos
  }, []);

  return (
    <>
      <h1>Lista de Usuarios</h1>
      {state.cargando && !state.error ? (
        <div>
          <p>Cargando...</p>
          {/* Agregamos un spinner simple */}
          <div className="spinner"></div>
        </div>
      ) : state.error ? (
        <p style={{ color: 'red' }}>Error: {state.error}</p>
      ) : (
        <ul>
          {state.usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre} - {usuario.edad} años
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
