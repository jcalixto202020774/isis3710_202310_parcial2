import Login from './Login';

import '../styles/Home.css';

import coffeeImage from './coffee.png';


function Home() {
    return (
        <div className='container-fluid'>
            <div className='col-12'>
                <div calsName='row' >
                    <h1 className='tittle'>El aroma mágico</h1>
                    <line></line>
                    <img className='image' src={coffeeImage} alt='coffee' />
                    <line></line>
                </div>
                <div className='row'>
                    <Login />
                </div>
                <div className='row'>
                    <h4 className='footer'>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</h4>
                </div>
            </div>
        </div>

    )
}

export default Home;