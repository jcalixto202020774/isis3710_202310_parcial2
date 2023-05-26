import Cafe from './Cafe';
import Login from './Login';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <div className='container-fluid' style={{ height: '100vh' }}>
            <div className='col-12'>
                <div calsName='row'>
                    <h1>El aroma mágico</h1>
                    <img src='public/coffee.png' alt='coffee' />
                </div>
                <div className='row'>
                    <Login />
                </div>
            </div>
        </div>

    )
}

export default Home;