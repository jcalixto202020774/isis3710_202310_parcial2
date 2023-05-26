import { useState } from 'react';
import Cafe from './Cafe';

const URL = 'http://localhost:3001/login';

function Login() {

  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    })
      .then(response => {
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          // La autenticación falló
          // Mostrar mensaje de error o realizar alguna acción
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  if (isLoggedIn) {
    return <Cafe />;
  }

  return (
    <div className="login-form">
      <div className="login-form__content">
        <h2>Inicio de sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login">Nombre de usuario:</label>
            <input
              type="text"
              id="login"
              value={login}
              onChange={e => setlogin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary"> Ingresar </button>
            <button type="button" className="btn btn-secondary">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
