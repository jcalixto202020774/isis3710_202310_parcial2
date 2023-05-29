import { useState } from 'react';
import Cafe from './Cafe';

import '../styles/Login.css';

const URL = 'http://localhost:3001/login';

function Login() {

  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [error, setError] = useState('');

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
          setError('Error de autenticación. Revise sus credenciales');
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
    < div className='container-fluid' >
      <div className='row'>
        <h4 className='txt-inicio'>Inicio de sesión</h4>
      </div>
      <div className='row'>
        <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="login-form__content">
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className='login-label' htmlFor="login">Nombre de usuario:</label>
                <div><input
                  className='login-input'
                  type="text"
                  id="login"
                  value={login}
                  onChange={e => setlogin(e.target.value)}
                />
                </div>
              </div>
              <div className="form-group">
                <label className='login-label' htmlFor="password">Contraseña:</label>
                <div>
                  <input
                    className='login-input'
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" className="btn-success"> Ingresar </button>
                <button type="submit" className="btn-danger"> Cancelar </button>

              </div>
              <div style={{ color: 'red', fontSize: '16px' }}>
                {error && <p className="error-message">{error}</p>}
              </div>

            </form>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Login;
