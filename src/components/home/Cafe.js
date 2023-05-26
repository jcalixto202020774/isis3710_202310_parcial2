import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';


function Cafe() {

    const URL = 'http://localhost:3001/cafes';

    const [cafes, setCafes] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                // Almacenar las ubicaciones en el estado
                console.log("Se ha cargado la lista de cafés: " + data);
                setCafes(data);
            })
            .catch(error => {
                // Manejar errores de la petición
                console.error(error);
            });
    }, []);

    const CardDetail = ({ selectedCard }) => {

        return (
            <div className="col-md-4">
                {selectedCard && (
                    <Card key={selectedCard.id} className='card' style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={selectedCard.imagen} />
                        <Card.Body>
                            <Card.Title>{selectedCard.nombre}</Card.Title>
                            <Card.Text>{selectedCard.region}</Card.Text>
                            <Card.Text>{selectedCard.notas}</Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        );
    };


    return (

        <div className="container-fluid" style={{ height: '100vh' }}>
            <div className="row" style={{ height: '100%' }}>
                <div className="col-8">
                    <div className='container'>
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Tipo</th>
                                        <th>Región</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cafes.map(cafe => (
                                        <tr key={cafe.id} onClick={() => fetch(`http://localhost:3001/cafes/${cafe.id}`)
                                            .then(response => response.json())
                                            .then(data => setSelectedCard(data))
                                            .catch(error => {
                                                console.error('Error:', error);
                                            })}>
                                            <td>{cafe.id}</td>
                                            <td>{cafe.nombre}</td>
                                            <td>{cafe.tipo}</td>
                                            <td>{cafe.region}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    {selectedCard && (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={selectedCard.imagen} />
                            <Card.Body>
                                <Card.Title>{selectedCard.nombre}</Card.Title>
                                <Card.Text>{selectedCard.region}</Card.Text>
                                <Card.Text>{selectedCard.notas}</Card.Text>
                                <Card.Text>{selectedCard.fecha_cultivo}</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cafe;

